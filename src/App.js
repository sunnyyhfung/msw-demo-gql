import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";

import PostList from "./components/PostList";
import PostCreate from "./components/PostCreate";
import Login from "./components/Login";
import Logout from "./components/Logout";

import { CHECK_AUTH } from "./queries/usersQuery";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("userInfo"))
  );

  const [checkAuth] = useMutation(CHECK_AUTH, {
    onCompleted: (data) => {
      setIsAuth(data.auth.isAuth);
    },
  });

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem("userInfo")));
  }, [isAuth]);

  return (
    <div>
      {isAuth ? (
        <Logout setIsAuth={setIsAuth} />
      ) : (
        <Login setIsAuth={setIsAuth} />
      )}
      {isAuth && <PostCreate user={user} />}
      <PostList />
    </div>
  );
}

export default App;
