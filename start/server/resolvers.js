var books = [
  {
    id: 1,
    title: "The Awakening",
    author: {
      name: "Kate Chopin",
    },
  },
  {
    id: 2,
    title: "City of Glass",
    author: {
      name: "Paul Auster",
    },
  },
];

const getAllBooks = () => {
  return books;
};

const addBook = (title, name, id) => {
  books.push({ id: id, title: title, author: {name: name }});
  console.log(books);
  return true;
};

const deleteBook = (idToRemove) => {
  books = books.filter((item) => item.id !== idToRemove);
  console.log(books);
  return true;
};

module.exports = {
  Query: {
    books: getAllBooks,
  },
  Mutation: {
    addBook: (props, args) => addBook(args.title, args.author, args.id),
    deleteBook: (props, args) => deleteBook(args.id),
  },
};
