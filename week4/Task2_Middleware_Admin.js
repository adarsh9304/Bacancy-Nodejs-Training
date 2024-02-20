/* eslint-disable prefer-destructuring */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable radix */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 8000;

app.use(bodyParser.json());

const middlewareForAdmin = (req, res, next) => {
  const role = req.headers.role;
  if (role && role === 'Admin') {
    return next();
  }
  res.status(403).send({ error: 'Your are not authorized' });
};
app.use(middlewareForAdmin);

const URL_GET_BOOKS = '/api/books/getBooks';
const URL_CREATE_BOOK = '/api/books/createBook';
const URL_UPDATE_BOOK = '/api/books/updateBook';
const URL_DELETE_BOOK = '/api/books/deleteBook/:id';

app.get(URL_GET_BOOKS, (req, res) => {
  fs.readFile('./books.json', 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send('Something went wrong!');
    } else {
      const books = JSON.parse(data);
      res.status(200).json(books);
    }
  });
});

app.get('/api/books/findBook/:id', (req, res) => {
  const id = req.params.id;
  fs.readFile('./books.json', 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send('Something went wrong!');
    } else {
      const books = JSON.parse(data);
      const book = books.find((book) => book.id === parseInt(id));
      if (book) {
        res.status(200).json(book);
      } else {
        res.status(404).send('Book not found');
      }
    }
  });
});

app.post(URL_CREATE_BOOK, (req, res) => {
  const newBook = req.body;
  fs.readFile('./books.json', 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send('Something went wrong!');
    } else {
      const books = JSON.parse(data);
      const nextId = books.length > 0 ? Math.max(...books.map((book) => book.id)) + 1 : 1;
      newBook.id = nextId;
      books.push(newBook);
      fs.writeFile('./books.json', JSON.stringify(books, null, 2), 'utf-8', (err) => {
        if (err) {
          res.status(500).send('Something went wrong!');
        } else {
          res.status(200).json(newBook);
        }
      });
    }
  });
});

app.put(URL_UPDATE_BOOK, (req, res) => {
  const updatedBook = req.body;
  fs.readFile('./books.json', 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send('Something went wrong!');
    } else {
      const books = JSON.parse(data);
      const bookIndex = books.findIndex((book) => book.id === updatedBook.id);
      if (bookIndex >= 0) {
        books[bookIndex] = updatedBook;
        fs.writeFile('./books.json', JSON.stringify(books, null, 2), 'utf-8', (err) => {
          if (err) {
            res.status(500).send('Something went wrong!');
          } else {
            res.status(200).json(updatedBook);
          }
        });
      } else {
        res.status(404).send('Book not found');
      }
    }
  });
});

app.delete(URL_DELETE_BOOK, (req, res) => {
  const { id } = req.params;
  fs.readFile('./books.json', 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send('Something went wrong!');
    } else {
      let books = JSON.parse(data);
      books = books.filter((book) => book.id.toString() !== id);
      fs.writeFile('./books.json', JSON.stringify(books, null, 2), 'utf-8', (err) => {
        if (err) {
          res.status(500).send('Something went wrong!');
        } else {
          res.status(200).send('Book has been deleted successfully!');
        }
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});
