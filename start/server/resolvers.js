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

const getBookById = (id) => {
  const bookFound = books.find((obj) => obj.id == id);
  console.log(bookFound);
  return bookFound;
};

const addBook = (title, name) => {
  const newId = books[books.length - 1].id + 1;
  books.push({ id: newId, title: title, author: { name: name } });
  console.log(books);
  return true;
};

const updateABook = (id, title, name) => {
  books.find((item) => item.id === id).author = { name: name };
  books.find((item) => item.id === id).title = title;
  console.log(books);
};

const deleteBook = (idToRemove) => {
  const filteredBooks = books.filter((item) => item.id !== idToRemove);
  books = filteredBooks;
  console.log(books);
  return true;
};

module.exports = {
  Query: {
    books: getAllBooks,
    getBookById: (props, args) => getBookById(args.id),
  },
  Mutation: {
    addBook: (props, args) => addBook(args.title, args.author),
    deleteBook: (props, args) => deleteBook(args.id),
    updateABook: (props, args) => updateABook(args.id, args.title, args.author),
  },
};
