/* eslint-disable no-continue */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
const arr = [1, 4, 2, 2, 3, 4, 5, 9, 1, 2, 1];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  if (arr[i] === 3) continue;
  else if (arr[i] > 5) break;
  console.log(arr[i]);
}
