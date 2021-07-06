import { graphql } from "msw";
import { graphql as graphqlRequest, buildSchema } from "graphql";

import { users, posts, comments } from "../dummy_data";

const schema = buildSchema(`
  type User {
    id: ID!
    name: String!
  }

  type Query {
    me: User
  }
`);

const root = {
  me: () => {
    return {
      id: "1",
      name: "John",
    };
  },
};

export const handlers = [
  graphql.operation(async (req, res, ctx) => {
    const payload = await graphqlRequest(
      schema,
      req.body.query,
      root,
      null,
      req.variables
    );
    return res(ctx.data(payload.data), ctx.errors(payload.errors));
  }),
];
