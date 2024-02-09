/* eslint-disable no-console */
const originalObject = {
  name: 'Adarsh',
  age: 21,
  hobbies: ['spend time in nature', 'Reading', 'Problem solving'],
};
const newObjectInShallow = originalObject; // shallow
newObjectInShallow.hobbies[1] = 'cricket';

console.log('original array in shallow ', originalObject);
console.log('modified array in shallow ', newObjectInShallow);

const newObjInDeep = structuredClone(originalObject); // deep
newObjInDeep.hobbies[1] = 'running';

console.log('original array in deep ', originalObject);
console.log('modified array in deep ', newObjInDeep);
