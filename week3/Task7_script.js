/* eslint-disable no-restricted-globals */
/* eslint-disable eqeqeq */
/* eslint-disable no-console */
const operation = process.argv[4];
const op1 = process.argv[2];
const op2 = process.argv[3];

if (isNaN(op1) || isNaN(op2)) {
  console.log('You provide invalid number');
} else if (operation === 'add') {
  const result = op1 + op2;
  console.log('sum of numbers is ', result);
} else if (operation == 'subtract') {
  const result = op1 - op2;
  console.log('subtraction of number is', result);
} else if (operation == 'multiply') {
  const result = op1 * op2;
  console.log('multiply of number is', result);
} else if (operation == 'divide') {
  const result = op1 - op2;
  console.log('division of number is', result);
} else console.log('You provide invalid operation type');
