import { gql, useQuery } from "@apollo/client";

const GET_ALL_POSTS = gql`
  query GetAllPosts {
    posts {
      id
      title
      body
      author {
        id
        name
      }
    }
  }
`;

const Post = () => {
  const { loading, error, data } = useQuery(GET_ALL_POSTS);

  if (loading) return <div>Loading</div>;

  if (error) return <div>error</div>;

  return (
    <div>
      {data.posts.map((post) => {
        return (
          <div key={post.id} style={{ border: "1px solid red" }}>
            <div>{post.title}</div>
            <div>{post.body}</div>
            <div>{post.author.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
