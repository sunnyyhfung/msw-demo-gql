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

  return <div onClick={handleLgout}>Logout</div>;
};

export default Logout;
