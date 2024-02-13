/* eslint-disable no-shadow */
/* eslint-disable arrow-parens */
/* eslint-disable radix */
/* eslint-disable no-console */
const fs = require('fs');
const http = require('http');

const PORT = 8000;
const HOST = 'localhost';

const URL_GET_BOOKS = '/api/books/getBooks';
const URL_CREATE_BOOK = '/api/books/createBook';
const URL_UPDATE_BOOK = '/api/books/updateBook';

const server = http.createServer((req, res) => {
  const { url, method } = req;

  if (method === 'GET') {
    if (url === URL_GET_BOOKS) {
      fs.readFile('./books.json', 'utf-8', (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Something went wrong!');
        } else {
          const books = JSON.parse(data);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(books));
        }
      });
    } else if (url.startsWith('/api/books/findBook/')) {
      const id = url.split('/')[4];
      fs.readFile('./books.json', 'utf-8', (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Something went wrong!');
        } else {
          const books = JSON.parse(data);
          const book = books.find((bookItr) => bookItr.id === parseInt(id));
          if (book) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(book));
          } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Book not found');
          }
        }
      });
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    }
  } else if (method === 'POST' && url === URL_CREATE_BOOK) {
    let body = '';

    req.on('data', (content) => {
      body += content;
    });

    req.on('end', () => {
      if (!body) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('There is no book detail, please provide');
        return;
      }

      const newBook = JSON.parse(body);
      fs.readFile('./books.json', 'utf-8', (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Something went wrong!');
        } else {
          const books = JSON.parse(data);
          const nextId = books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 1;
          newBook.id = nextId;
          books.push(newBook);
          fs.writeFile('./books.json', JSON.stringify(books, null, 2), 'utf-8', (err) => {
            if (err) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Something went wrong!');
            } else {
              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify(newBook));
            }
          });
        }
      });
    });
  } else if (method === 'PUT' && url === URL_UPDATE_BOOK) {
    let body = '';

    req.on('data', (data) => {
      body += data;
    });

    req.on('end', () => {
      if (!body) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('There is no book detail, please provide');
        return;
      }

      const updatedBook = JSON.parse(body);
      fs.readFile('./books.json', 'utf-8', (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Something went wrong!');
        } else {
          const books = JSON.parse(data);
          const bookIndex = books.findIndex((book) => book.id === updatedBook.id);
          if (bookIndex !== -1) {
            books[bookIndex] = updatedBook;
            fs.writeFile('./books.json', JSON.stringify(books, null, 2), 'utf-8', (err) => {
              if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Something went wrong!');
              } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(updatedBook));
              }
            });
          } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Book not found');
          }
        }
      });
    });
  } else if (method === 'DELETE' && url.startsWith('/api/books/delete/')) {
    const id = url.split('/')[4];
    if (!id) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Please provide a valid book id');
      return;
    }
    fs.readFile('./books.json', 'utf-8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Something went wrong!');
      } else {
        const books = JSON.parse(data).filter((book) => book.id.toString() !== id);
        fs.writeFile('./books.json', JSON.stringify(books), (error) => {
          if (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Something went wrong!');
          } else {
            res.end('Book has been deleted successfully!');
          }
        });
      }
    });
  } else {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Please provide a valid method or route!');
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Server has started on port ${PORT}`);
});
