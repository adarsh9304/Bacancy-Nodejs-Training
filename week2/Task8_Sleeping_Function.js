/* eslint-disable no-console */
/* eslint-disable no-plusplus */
// sleeping function
// Create sleep function which can stop for loop for given amount of time

function pause(callback, time) {
  setTimeout(callback, time);
}
function Sleeping(time, start, end) {
  for (let i = start; i <= end; i++) {
    pause(() => {
      console.log(i);
    }, time);
  }
}

Sleeping(7000, 1, 10);
