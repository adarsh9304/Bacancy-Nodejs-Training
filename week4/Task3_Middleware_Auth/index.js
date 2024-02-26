/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
const express = require('express');

const app = express();

const dotenv = require('dotenv');
const database = require('./connect/database');

dotenv.config();
const PORT = process.env.PORT || 4000;

database.connect();
app.use(express.json());

app.get('/', (req, res) => res.json({
  success: true,
  message: 'Your server is up and running....',
}));

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
