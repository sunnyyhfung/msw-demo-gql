import { useState } from "react";
import { useMutation } from "@apollo/client";

import { LOGIN } from "../queries/usersQuery";

const Login = ({ setIsAuth }) => {
  const [loginCredential, setLoginCredential] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState();

  const [login] = useMutation(LOGIN, {
    onCompleted: () => {
      setLoginCredential({
        username: "",
        password: "",
      });

      setError(null);

      setIsAuth(true);
    },
    onError: ({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        setError(graphQLErrors[0]);
      }

      if (networkError) {
        setError(networkError.result.errors[0]);
      }

      setLoginCredential({
        username: "",
        password: "",
      });
    },
  });

  const { username, password } = loginCredential;

  const handleChange = (e) => {
    setLoginCredential({
      ...loginCredential,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    login({
      variables: {
        username,
        password,
      },
    });
  };

  return (
    <>
      Login:
      {error && <div>{error.message}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
          required
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Login;
