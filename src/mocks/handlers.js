import { graphql, createResponseComposition, context } from "msw";
import { graphql as graphqlRequest } from "graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { users, posts, comments } from "../dummy_data";

const _users = users.map((user) => ({
  id: user.id,
  username: user.username,
}));

const typeDefs = `
  type User {
    id: ID!
    username: String!
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    author: User!
    comments: [Comment]!
  }

  type Comment {
    id: ID!
    content: String!
  }

  type Query {
    posts: [Post]!
  }
 
`;

const resolvers = {
  Query: {
    posts() {
      return posts;
    },
  },
  Post: {
    author(parentValue) {
      return users.find((user) => user.id === parentValue.author);
    },
    comments(parentValue) {
      const postComments = parentValue.comments.map((comment) => {
        return comments.find((_comment) => _comment.id === comment);
      });

      return postComments;
    },
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const delayedResponse = createResponseComposition(null, [context.delay(3000)]);

export const handlers = [
  /**
   * ********************************************************
   *  Queries
   * ********************************************************
   */

  // Handles a "GetAllUsers" query
  graphql.query("GetAllUsers", (req, res, ctx) => {
    return res(
      ctx.data({
        users: _users,
      })
    );
  }),

  // Hanldes a "GetSingleUser" query
  graphql.query("GetSingleUser", (req, res, ctx) => {
    const { id } = req.variables;

    return res(
      ctx.data({
        user: _users.find((user) => user.id === id),
      })
    );
  }),

  // Handles a "GetAllPosts" query
  graphql.query("GetAllPosts", (req, res, ctx) => {
    const output = posts.map((post) => {
      const idx = users.findIndex((user) => user.id === post.author);

      const copyCommentIds = [...post.comments];
      const copyComments = copyCommentIds.map((id) => {
        return comments[id];
      });

      const copy = {
        ...post,
        author: _users[idx],
        comments: copyComments,
      };

      return copy;
    });

    // return res(
    //   ctx.data({
    //     posts: output,
    //   })
    // );

    return delayedResponse(
      ctx.data({
        posts: output,
      })
    );
  }),

  // Handles a "GetSinglePost" query
  graphql.query("GetSinglePost", (req, res, ctx) => {
    const { id } = req.variables;

    const targetPost = posts.find((post) => post.id === id);
    const targetAuthor = _users[targetPost.author];

    const copyCommentIds = [...targetPost.comments];
    const copyComments = copyCommentIds.map((id) => {
      return comments[id];
    });

    const output = {
      ...targetPost,
      author: targetAuthor,
      comments: copyComments,
    };

    return res(
      ctx.data({
        post: output,
      })
    );
  }),

  /**
   * ********************************************************
   *  Mutations
   * ********************************************************
   */

  // hanlde "AddPost" mutation
  graphql.mutation("AddPost", (req, res, ctx) => {
    const { author, title, body } = req.variables;

    const post = {
      id: posts.length + 1,
      title,
      body,
      author: author,
      comments: [],
    };

    posts.unshift(post);

    return res(
      ctx.data({
        post,
      })
    );
  }),

  // handle "Login" mutation
  graphql.mutation("Login", (req, res, ctx) => {
    const { username, password } = req.variables;

    const user = users.find((user) => user.username === username);

    if (!user || (user && user.password !== password)) {
      sessionStorage.removeItem("userInfo");

      return res(
        ctx.status(403), // error type is a network error, it is wrap errors array into networkError.result
        ctx.errors([
          // error type is custom graphql error
          {
            message: "username or password invalid.",
            errorType: "AuthenticationError",
          },
        ]),
        ctx.cookie("authToken")
      );
    }

    const _user = {
      id: user.id,
      username: user.username,
    };

    sessionStorage.setItem("userInfo", JSON.stringify(_user));

    return res(
      ctx.data({
        user: _user,
      }),
      ctx.cookie("authToken", "this-is-a-correct-token")
    );
  }),

  // handle "CheckAuth" mutation
  graphql.mutation("CheckAuth", (req, res, ctx) => {
    const { authToken } = req.cookies;

    if (authToken !== "this-is-a-correct-token") {
      return res(
        ctx.data({
          auth: {
            isAuth: false,
          },
        })
      );
    }

    return res(
      ctx.data({
        auth: {
          isAuth: true,
        },
      })
    );
  }),

  graphql.mutation("Logout", (req, res, ctx) => {
    sessionStorage.removeItem("userInfo");

    return res(
      ctx.data({
        auth: {
          isAuth: false,
        },
      }),
      ctx.cookie("authToken")
    );
  }),

  /**
   * ********************************************************
   *  Catch All Operation
   * ********************************************************
   */

  graphql.operation(async (req, res, ctx) => {
    const payload = await graphqlRequest(
      schema,
      req.body.query,
      typeDefs,
      { req, res, ctx },
      req.variables
    );

    return res(ctx.data(payload.data), ctx.errors(payload.errors));
  }),
];
