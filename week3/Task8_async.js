/* eslint-disable no-console */
const fs = require('fs');

setTimeout(() => {
  console.log('first promise 2s');
}, 2000);

const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve('second promise 0s');
  }, 0);
});

fs.readFile(`${__dirname}/Task8_input.txt`, 'utf-8', (err, data) => {
  if (err) {
    console.log('Error while reading ', err);
  } else {
    console.log(data);
  }
});

setTimeout(() => {
  console.log('Third timeout 3s ');
}, 3000);

promise.then((data) => {
  console.log('from promise we get ', data);
});
