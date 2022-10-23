import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    Hello(input: Input!): Result
  }

  input Input {
    message: String!
  }
`;

export default typeDefs;

