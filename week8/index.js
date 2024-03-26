/* eslint-disable sort-imports */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
/* eslint-disable sort-imports */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */

import dotenv from 'dotenv';
import express from 'express';
import { createClient } from 'redis';
import dbConnect from './config/database.js';
import { createTodo } from './controllers/createTodo.js';
import { deleteTodo } from './controllers/deleteTodo.js';
import { getTodo, getTodoById } from './controllers/getTodo.js';
import { updateTodo } from './controllers/updateTodo.js';

const app = express();

dotenv.config();

dbConnect();
console.log('Connected to MongoDB');

const PORT = process.env.PORT || 4000;

app.use(express.json());

export const client = createClient();
client.on('error', (err) => console.log('Redis Client Error', err));
client.connect();

const cacheMiddleware = async (req, res, next) => {
  let cachedData;
  if (req.params.id) {
    cachedData = await client.get(`todo/${req.params.id}`);
  } else {
    cachedData = await client.get('todos');
  }
  if (cachedData) {
    const data = JSON.parse(cachedData);
    console.log('Redis cache');
    return res.status(200).json(data);
  }

  next();
};
// Routes
app.get('/todos', cacheMiddleware, getTodo);
app.get('/todo/:id', cacheMiddleware, getTodoById);
app.put('/todo/:id', updateTodo);
app.delete('/todo/:id', deleteTodo);
app.post('/todo', createTodo);

app.get('/', (req, res) => {
  res.send('client', client);
});

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
