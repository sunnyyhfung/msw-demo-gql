const PostDetail = (props) => {
  const { post } = props;

  return (
    <div style={{ border: "1px solid red" }}>
      <div>{post.title}</div>
      <div>{post.body}</div>
      <div>{post.author.username}</div>
    </div>
  );
};

export default PostDetail;
