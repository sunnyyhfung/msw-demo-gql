import { useMutation } from "@apollo/client";

import { LOGOUT } from "../queries/usersQuery";

const Logout = ({ setIsAuth }) => {
  const [logout] = useMutation(LOGOUT, {
    onCompleted: () => {
      setIsAuth(false);
    },
  });

  const handleLgout = () => {
    logout();
  };

  return <button onClick={handleLgout}>Logout</button>;
};

export default Logout;
