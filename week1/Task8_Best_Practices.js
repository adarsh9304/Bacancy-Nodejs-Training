/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
/* eslint-disable no-redeclare */
/* eslint-disable no-constant-condition */
/* eslint-disable prefer-const */
/* eslint-disable block-scoped-var */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable no-console */

// we can use const variable when we want immuatble behaviour of variable and the value of that variable remains constant throughout whole the program

const URL_GOOGLE = 'www.google.com';
console.log(URL_GOOGLE);

var x = 10;
let y = 10;
const z = 10;

if (true) {
  console.log('inside');
  var x = 15;
  console.log(x); // 15
  let y = 15;
  console.log(y); // 15
  const z = 15;
  console.log(z); // 15
}
console.log('outside');
console.log(x); // 15
console.log(y); // 10
console.log(z); // 10

// Use let for variables that need to be reassigned and want local scope
function sqaure(x) {
  let result = x * x;
  return result;
}
let res = sqaure(5);
console.log(res);

// use var for mutability in global scope
var count = 0;
function incrementByOne() {
  count++;
}
function incrementByTwo() {
  count += 2;
}
incrementByOne();
incrementByTwo();
console.log(count);
