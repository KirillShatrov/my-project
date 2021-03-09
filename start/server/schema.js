const { gql } = require("apollo-server");

const typeDefs = gql`
  type Book {
    title: String!
    author: String!
  }

#   type NewBookAddedResponse {
#     success: Boolean!
#     message: String
#     books: Book
#   }

  input addABook {
    title: String!
    author: String!
  }

  type Query {
    books: [Book]
  }

  #   type Mutation {
  #     addBook(title: String, author: String): Book
  #   }
`;

module.exports = typeDefs;
