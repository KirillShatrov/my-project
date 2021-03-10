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
  deleteBook(id: 3) {
    id
  }
}