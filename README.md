# Query to get all books:
{
  books {
    title
    author {
      name
    }
  }
}

# Query to get a book by id:
{
  getBookById(id: 2) {
    title
    author {
      name
    }
  }
}

# Query to find books with similiar titles and authors:
{
  getSimilarBooks(title: "Awakening") {
    title
  }
}

# Mutation to add a book:
mutation {
  addBook(title: "Empire of the Ants", author: "Bernard Werber") {
    title
    author {
      name
    }
  }
}

# Mutation to delete a book:
mutation {
  deleteBook(id: 5) {
    id
  }
}

# Mutation to update a book:
mutation {
  updateABook(id:2, title: "Empire of the Ants123", author: "Bernard Werber123") {
    title
    author {
      name
    }
  }
}