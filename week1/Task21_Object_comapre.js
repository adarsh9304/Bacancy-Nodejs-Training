/* eslint-disable no-prototype-builtins */
/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
const user1 = {
  name: 'user1',
  age: 21,
  field: 'IT',
};

const user2 = {
  name: 'user2',
  age: 21,
};

function compareObject() {
  for (const ele in user1) {
    if (!user2.hasOwnProperty(ele)) {
      console.log('Not similar property');
      return;
    }
  }
  for (const ele in user2) {
    if (!user1.hasOwnProperty(ele)) {
      console.log('Not similar property');
      return;
    }
  }
  console.log('similar property');
}
compareObject();
