/* eslint-disable no-plusplus */
/* eslint-disable no-console */
const arr = ['CPP', 'Java', 'Rust', 'Python', 'Javascript', 'PHP'];

let i = 0;

while (i < arr.length) {
  if (arr[i].length > 8) break;
  arr[i].split('').forEach((char) => process.stdout.write(`${char} `));
  console.log('!');
  i++;
}
