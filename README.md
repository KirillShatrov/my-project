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
  addBook(title: "Empire of the Ants", author: "Bernard Werber") {
    title
    author {
      name
    }
  }
}