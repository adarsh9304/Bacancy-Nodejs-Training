/* eslint-disable no-console */
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const newArr = arr.filter((ele) => ele % 2 === 0);

console.log('original array ', arr);
console.log('New Filtered array', newArr);
