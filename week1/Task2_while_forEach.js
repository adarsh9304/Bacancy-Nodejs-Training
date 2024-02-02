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

// Difference bewteeen while loop and forEach loop
// while loop is general purpose where as forEach is used for array only
// in while loop we have to handle the control flow where as forEach loop is iterated over all element
