/* eslint-disable no-console */
const Sequelize = require('sequelize');

const sequelize = new Sequelize('ecommerce', 'postgres', 'Adarsh@19', {
  dialect: 'postgres',
  host: 'localhost',
  // port: '5432',
  logging: true,
});

const connect = async () => {
  try {
    // await sequelize.sync({ force: true });
    await sequelize.authenticate();
    console.log('Database connected successfully!');
  } catch (err) {
    console.error('Failed to connect to database:', err.message);
  }
};

module.exports = { connect, sequelize };
