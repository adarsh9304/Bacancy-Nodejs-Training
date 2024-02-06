/* eslint-disable no-console */
const arr = [1, 2, 3, 4, 5];

console.log('original array ', arr);

arr.push(6);
console.log('after push ', arr);

arr.pop();
console.log('after pop', arr);

arr.shift();
console.log('after shift', arr);

arr.unshift(1);
console.log('after 1 unshift', arr);

const index = arr.indexOf(4);
console.log(`index of 4 is ${index} `);
