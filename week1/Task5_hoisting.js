/* eslint-disable prefer-const */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable no-lone-blocks */
/* eslint-disable block-scoped-var */
/* eslint-disable no-use-before-define */
/* eslint-disable no-console */

// For Var

console.log(x); // undefined
{
  var x = 5;
}
console.log(x); // 5
x = 8;
console.log(x); // 8

// for let

// console.log(y); // Reference error
// console.log(z); // Reference Error
{
  let y = 5;
  console.log(y); // 5
}
// console.log(y); // Reference Error

let z = 7;
console.log(z);

// on the first go of execution whenever javascript encounter the Var variable which has global scope, js will assign the undefined to it and in the second go it will assign the value , so whenever we access the variable before intinialize then js will done the first go and in the second go it will be printed the undefined to particular variable which is come from first go , but it gives the reference error when we will do same thing with let varibale because let has local scope.
