# Query to get all books:
{
  books {
    title
    author {
      name
    }
  }
}

# Mutation to add a book:
mutation {
  addBook(title: "Empire of the Ants", author: "Bernard Werber", id: 3) {
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