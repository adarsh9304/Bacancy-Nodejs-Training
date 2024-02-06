/* eslint-disable no-console */
const arr = [1, 2, 3, 4, 5, 6, 7];

const sum = arr.reduce((total, current) => total + current, 0);

console.log('original array', arr);
console.log(`The sum of array is ${sum}`);
