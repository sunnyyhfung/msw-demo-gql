import { useQuery } from "@apollo/client";

import PostDetail from "./PostDetail";

import { GET_ALL_POSTS } from "../queries/postsQuery";

const PostList = () => {
  const { loading, error, data } = useQuery(GET_ALL_POSTS);

  if (loading) return <div>Loading</div>;

  if (error) return <div>error</div>;

  return (
    <div>
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
