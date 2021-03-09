const books = [
  {
    title: "The Awakening",
    author: {
      name: "Kate Chopin",
    },
  },
  {
    title: "City of Glass",
    author: {
      name: "Paul Auster",
    },
  },
];

const getAllBooks = () => {
  return books;
};

const addBook = (title, name) => {
  books.push({ title: title, author: {name: name }});
  console.log(books);
  return true;
};

module.exports = {
  Query: {
    books: getAllBooks,
  },
  Mutation: {
    addBook: (props, args) => addBook(args.title, args.author),
  },
};
