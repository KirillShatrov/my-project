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
  return Promise.resolve(books);
};

module.exports = {
  Query: {
    books: () => getBooks,
  },
  // Mutation: {
  //   createProduct: async (_, { product }) => createProduct({ product   })
  // }
};
