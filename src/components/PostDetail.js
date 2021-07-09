const styleContainer = {
  border: "1px solid black",
  marginTop: "15px",
};

const styleBody = {
  marginTop: "10px",
};

const styleAuthor = {
  marginTop: "10px",
};

const PostDetail = (props) => {
  const { post } = props;

  return (
    <div style={styleContainer}>
      <div>{post.title}</div>
      <div style={styleBody}>{post.body}</div>
      <div style={styleAuthor}>{post.author.username}</div>
    </div>
  );
};

export default PostDetail;
