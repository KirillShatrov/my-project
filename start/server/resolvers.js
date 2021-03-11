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
  {
    id: 3,
    title: "Awakening",
    author: {
      name: "Joe Smith",
    },
  },
  {
    id: 4,
    title: "City of Tomorrow",
    author: {
      name: "Joe Smith",
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

const getSimilarBooks = (title, name) => {
  const similarBooks = books.filter(
    (item) =>
      item.title.indexOf(title) !== -1 || item.author.name.indexOf(name) !== -1
  );
  console.log(similarBooks);
};

module.exports = {
  Query: {
    books: getAllBooks,
    getBookById: (props, args) => getBookById(args.id),
    getSimilarBooks: (props, args) => getSimilarBooks(args.title, args.author),
  },
  Mutation: {
    addBook: (props, args) => addBook(args.title, args.author),
    deleteBook: (props, args) => deleteBook(args.id),
    updateABook: (props, args) => updateABook(args.id, args.title, args.author),
  },
};
