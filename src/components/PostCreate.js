import { useState } from "react";
import { useMutation } from "@apollo/client";

import { ADD_POST, GET_ALL_POSTS } from "../queries/postsQuery";

const style = {
  marginTop: "15px",
};

const PostCreate = ({ user }) => {
  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  const [addPost] = useMutation(ADD_POST, {
    refetchQueries: [{ query: GET_ALL_POSTS }],
    onCompleted() {
      setPost({
        title: "",
        body: "",
      });
    },
  });

  const { title, body } = post;

  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const hanldeSubmit = (e) => {
    e.preventDefault();

    addPost({
      variables: { author: user.id, title, body },
    });
  };

  return (
    <div style={style}>
      Create Ppost:
      <form onSubmit={hanldeSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="body"
          placeholder="Body"
          value={body}
          onChange={handleChange}
          required
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default PostCreate;
