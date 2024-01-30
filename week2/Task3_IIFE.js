/* eslint-disable func-names */
/* eslint-disable no-console */

// immediately invoked function expression

// without parameter
(function () {
  console.log('The topic is IIFE');
}());

// with parameter
(function (topic) {
  console.log(`The topic is ${topic} `);
}('IIFE'));
