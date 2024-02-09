/* eslint-disable no-console */
const originalObject = {
  technology: 'React',
  sponseredBy: 'Facebook',
};

const modifiedObject = originalObject;
modifiedObject.technology = 'Rust';
console.log('original array is ', originalObject);
console.log('modified array is ', modifiedObject);
