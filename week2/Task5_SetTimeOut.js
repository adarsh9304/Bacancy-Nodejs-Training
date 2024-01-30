/* eslint-disable no-console */
// setTimeout Practical

// Create simple program that will print 1 to n at the interval of 1 second using setTimeout

function counter(num, n) {
  if (num <= n) {
    setTimeout(() => {
      console.log(num);
      counter(num + 1, n);
    }, 1000);
  }
}
counter(1, 10);
