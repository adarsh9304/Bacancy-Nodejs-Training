/* eslint-disable no-await-in-loop */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
// sleeping function
// Create sleep function which can stop for loop for given amount of time

function pause(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
async function Sleeping(time, start, end) {
  for (let i = start; i <= end; i++) {
    await pause(time);
    console.log(i);
  }
}
Sleeping(2000, 1, 10);
