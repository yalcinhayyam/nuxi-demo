import { ApolloServer } from "@apollo/server";
import { startServerAndCreateH3Handler } from "@as-integrations/h3";

const typeDefs = `#graphql
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    books: () => [{ title: "Test Book", author: "john doe" }],
  },
};

const apollo = new ApolloServer({ typeDefs, resolvers });

export default startServerAndCreateH3Handler(apollo, {
  //   context: (event) =,
});
