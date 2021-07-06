import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      user {
        username
      }
    }
  }
`;

export const CHECK_AUTH = gql`
  mutation CheckAuth {
    auth {
      isAuth
    }
  }
`;

export const LOGOUT = gql`
  mutation Logout {
    auth {
      isAuth
    }
  }
`;
