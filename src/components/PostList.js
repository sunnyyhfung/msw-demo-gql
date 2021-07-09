import { useQuery } from "@apollo/client";

import PostDetail from "./PostDetail";

import { GET_ALL_POSTS } from "../queries/postsQuery";

const PostList = ({user}) => {

  const { loading, error, data } = useQuery(GET_ALL_POSTS);
  let List;

  if(data){
    List = data.posts;
    if(user) {
      List = data.posts.filter((post) => {
          return post.author.id === user.id
      });
    }
  }

  if (loading) return <div>Loading</div>;

  if (error) return <div>error</div>;

  return (
    <div>
      {List.map((post) => {

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
