/* eslint-disable block-scoped-var */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable no-constant-condition */
/* eslint-disable no-console */
/* eslint-disable no-lone-blocks */

// let variable : local scope

let x = 5;
console.log(x); // 5

x = 7;
console.log(x); // 7

if (true) {
  // eslint-disable-next-line no-shadow, prefer-const
  let x = 9;
  console.log(x); // 9
}
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
}
console.log(y); // 9

// const variable

const z = 5;
console.log(z); // 5

// z=7 you can not modify the constant
// const z; z=8 Error:You have to initiliaze the const while declaring
