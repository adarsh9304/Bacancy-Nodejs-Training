/* eslint-disable no-console */
const students = [
  { name: 'jeel', age: 21 },
  { name: 'Franklin', age: 23 },
  { name: 'vivek', age: 17 },
  { name: 'hardik', age: 17.9 },
  { name: 'ritik', age: 18.2 },
];
// map and filter

const filteredStudents = students.filter((student) => student.age > 18).map((student) => student.name);

// eslint-disable-next-line no-console
console.log('Results from filter and Map', filteredStudents);

// Reduce function

const resultsOfFiltered = students.reduce((studentCollection, student) => {
  if (student.age > 18) {
    studentCollection.push(student.name);
  }
  return studentCollection;
}, []);

console.log('Result From Reduce Method', resultsOfFiltered);
