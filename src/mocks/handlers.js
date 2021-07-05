import { graphql } from "msw";

import { users, posts, comments } from "../dummy_data";

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
        users,
      })
    );
  }),

  // Hanldes a "GetSingleUser" query
  graphql.query("GetSingleUser", (req, res, ctx) => {
    const { id } = req.variables;

    return res(
      ctx.data({
        user: users.find((user) => user.id === id),
      })
    );
  }),

  // Handles a "GetAllPosts" query
  graphql.query("GetAllPosts", (req, res, ctx) => {
    const output = posts.map((post) => {
      const idx = users.findIndex((user) => user.id === post.author);

      const copy = {
        ...post,
        author: users[idx],
      };

      return copy;
    });

    return res(
      ctx.data({
        posts: output,
      })
    );
  }),

  /**
   * ********************************************************
   *  Mutations
   * ********************************************************
   */
];
