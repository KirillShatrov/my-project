const { gql } = require("apollo-server");

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
]

const typeDefs = gql`

    type Book {
        title: String!
        author: String!
    }

    type NewBookAddedResponse {
        success: Boolean!
        message: String
        books: [Book]
    }

    input addABook {
        title: String!
        author: String!
    }

    type Query {
        books: ${books}!
    }

    type Mutation {
        addABook(title: String!, author: String!): NewBookAddedResponse!
    }
`;

module.exports = typeDefs;
