const { gql } = require("apollo-server");

const typeDefs = gql`
  type Book {
    title: String
    author: Author
    id: Int
  }

  type Author {
    name: String
  }

  input addBook {
    title: String!
    author: String!
    id: Int!
  }

  input deleteBook {
    id: Int!
  }

  type Query {
    books: [Book]
  }

  type Mutation {
    addBook(title: String, author: String, id: Int): Book
    deleteBook(id: Int): Book
  }
`;

module.exports = typeDefs;
