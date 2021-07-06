import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
  query GetAllPosts {
    posts {
      id
      title
      body
      author {
        id
        username
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation AddPost($author: ID!, $title: String!, $body: String!) {
    addPost(author: $author, title: $title, body: $body) {
      title
      body
    }
  }
`;
