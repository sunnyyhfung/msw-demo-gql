import { gql } from "@apollo/client";

const typeDefs = gql`
  # Authenticates using a given username
  mutation Login($username: String!) {
    login(username: $username) {
      username
    }
  }

  # Returns the information about the authenticated user
  query GetUserInfo() {
    user {
      username
      firstName
    }
  }
`;
