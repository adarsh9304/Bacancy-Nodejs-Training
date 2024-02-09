/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
const student = {
  name: 'student1',
  age: '21',
  grades: [95, 97, 84, 89, 92],
  calculateAverage() {
    let sum = 0;
    const len = this.grades.length;
    for (const ele in this.grades) {
      sum += this.grades[ele];
    }
    return sum / len;
  },
};

for (const prop in student) {
  if (Object.hasOwnProperty.call(student, prop)) {
    const data = student[prop];
    console.log(`key is ${prop} and value is ${data}`);
  }
}
console.log(`Avearge Grade Achieved by student is ${student.calculateAverage()}`);
