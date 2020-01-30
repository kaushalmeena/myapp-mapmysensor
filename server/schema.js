const { gql } = require('apollo-server');

const typeDefs = gql`
  type Book {
    id: ID
    title: String
    description: String
    author: Author
  }

  type Author {
    id: ID
    name: String
    description: String
    works: [Book]
  }

  type Query {
    books: [Book]
    authors: [Author]
    book(id: ID!): Book
    author(id: ID!): Author
  }

  type Mutation {
    createBook(title: String, description: String authorId: String): Book
    updateBook(id: ID, title: String, description: String authorId: String): Book
    deleteBook(id: ID): Book
    createAuthor(name: String, description: String): Author
    updateAuthor(id: ID, name: String, description: String): Author
    deleteAuthor(id: ID): Author
  }
`;


const resolvers = {
    Query: {
        books: () => books,
        authors: () => authors,
        book: (root, { id }) => books.find((item) => item.id == id),
        author: (root, { id }) => authors.find((item) => item.id == id)
    },
    Book: {
        author: ({ authorId }) => authors.find((item) => item.id == authorId)
    },
    Author: {
        works: ({ id }) => books.filter((item) => item.authorId == id)
    },
    Mutation: {
        createBook: (root, { title, description, authorId }) => {
            const book = {
                id: 'b' + Math.floor(Math.random() * (999 - 100 + 1) + 100),
                title: title,
                description: description,
                authorId: authorId
            }

            books.push(book);

            return book;
        },
        updateBook: (root, { id, title, description, authorId }) => {
            const book = books.find((item) => item.id == id);

            if (book) {
                book.title = title;
                book.description = description;
                book.authorId = authorId;
            }

            return book;
        },

        deleteBook: (root, { id }) => {
            const book = books.find((item) => item.id == id);

            if (book) {
                books = books.filter((item) => item.id != id);
            }

            return book;
        },

        createAuthor: (root, { name, description }) => {
            const author = {
                id: 'a' + Math.floor(Math.random() * (999 - 100 + 1) + 100),
                name: name,
                description: description,
            }

            authors.push(author);

            return author;
        },

        updateAuthor: (root, { id, name, description }) => {
            const author = authors.find((item) => item.id == id);

            if (author) {
                author.name = name;
                author.description = description;
            }

            return author;
        },

        deleteAuthor: (root, { id }) => {
            const author = authors.find((item) => item.id == id);

            if (author) {
                authors = authors.filter((item) => item.id != id);
            }

            return author;
        },
    }
};

module.exports = {
    typeDefs, resolvers
};
