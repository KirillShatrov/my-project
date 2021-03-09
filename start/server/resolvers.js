const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

const getBooks = () => {
  return books;
};

module.exports = {
  Query: {
    books: getBooks,
  },
  // Mutation: {
  //   createProduct: async (_, { product }) => createProduct({ product   })
  // }
};
