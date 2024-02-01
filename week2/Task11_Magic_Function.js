/* eslint-disable no-console */
// magic function

let sum = 0;

function magic(num) {
  if (num === undefined) return sum;
  sum += num;
  return magic;
}
const result = magic(2)(3)(4)(5)();
console.log(result);
