/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
// Create sample script named simplescript.js that prints current date and time and executes using node. print current time using momentjs library.

const moment = require('moment');

const currentTime = moment().format('DD-MM-YYYY HH:MM:SS');

console.log('The current date and time :', currentTime);
