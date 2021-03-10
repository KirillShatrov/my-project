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
  }

  input deleteBook {
    id: Int!
  }

  type Query {
    books: [Book]
    getBookById(id: Int): Book
  }

  type Mutation {
    addBook(title: String, author: String): Book
    deleteBook(id: Int): Book
  }
`;

module.exports = typeDefs;
