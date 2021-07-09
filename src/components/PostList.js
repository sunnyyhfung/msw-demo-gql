import { useQuery } from "@apollo/client";

import PostDetail from "./PostDetail";

import { GET_ALL_POSTS } from "../queries/postsQuery";

const style = {
  marginTop: "20px",
};

const PostList = () => {
  const { loading, error, data } = useQuery(GET_ALL_POSTS);

  if (loading) return <div style={style}>Loading...</div>;

  if (error) return <div style={style}>error</div>;

  return (
    <div style={style}>
      {data.posts.map((post) => {
        return (
          <div key={post.id}>
            <PostDetail post={post} />
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
