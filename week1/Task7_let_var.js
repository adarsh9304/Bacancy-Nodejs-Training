/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable block-scoped-var */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable no-constant-condition */
/* eslint-disable no-console */

// var :global scope
// let :local scope

let x = 5;
console.log(x); // 5

x = 7;
console.log(x); // 7

if (true) {
  // eslint-disable-next-line no-shadow, prefer-const
  let x = 9;
  console.log(x); // 9

  let x1 = 5;
}
// console.log(x1); x1 is not defined
console.log(x); // 7

// var variable:Global scope

var y = 5;
console.log(y); // 5

y = 7;
console.log(y); // 7

if (true) {
  // eslint-disable-next-line no-shadow, prefer-const, no-redeclare
  var y = 9;
  console.log(y); // 9

  var z = 10;
}
console.log(y); // 9
console.log(z); // 10
