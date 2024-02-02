/* eslint-disable no-console */
/* eslint-disable no-plusplus */
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 5; j++) {
    if (i === j) break;
    console.log(`inner iteration=${i} and outer iteration=${j}`);
  }
}
