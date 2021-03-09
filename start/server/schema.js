const { gql } = require("apollo-server");

const typeDefs = gql`
  type Book {
    title: String
    author: Author
  }

  type Author {
    name: String
  }

  input addABook {
    title: String!
    author: String!
  }

  type Query {
    books: [Book]
  }

  type Mutation {
    addBook(title: String, author: String): Book
  }
`;

module.exports = typeDefs;
