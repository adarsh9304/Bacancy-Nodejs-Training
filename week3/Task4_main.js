/* eslint-disable import/extensions */
/* eslint-disable no-console */

// in packge.json type=module for multiplication

// import { multiply } from './Task4_multiply.mjs';

// const result_of_multiply = multiply(15, 20);
// console.log('result of multiplication ', result_of_multiply);

const sum = require('./Task4_sum.cjs');

const result_of_sum = sum(15, 20);
console.log('sum of numbers is ', result_of_sum);
