/* eslint-disable no-console */
/* eslint-disable no-plusplus */
// Create a function that takes an array and a callback function specifying the operation to be performed on each element of the array. The function should return a new modified array. (Don’t use map)

const cube = (num) => num * num * num;

function outer(arr, callback) {
  const modifiedArray = [];
  for (let i = 0; i < arr.length; i++) {
    const val = callback(arr[i]);
    modifiedArray.push(val);
  }
  return modifiedArray;
}

const array = [3, 7, 15, 19, 24, 31];
const modifiedArray = outer(array, cube);
console.log('original Array', array);
console.log('Modified Array ', modifiedArray);
