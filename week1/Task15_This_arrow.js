/* eslint-disable no-console */
const calculator = {
  x: 25,
  y: 15,

  calculate(operation) {
    const add = () => this.x + this.y;
    const subtract = () => this.x - this.y;
    const multiply = () => this.x * this.y;
    const divide = () => this.x / this.y;

    if (operation === 'add') {
      console.log('addition of numbers is', add());
    } else if (operation === 'subtract') {
      console.log('subtraction of numbers is', subtract());
    } else if (operation === 'multiply') {
      console.log('multiplication of numbers is', multiply());
    } else if (operation === 'divide') {
      console.log('division of numbers is', divide());
    } else console.log('you entered wrong operation');
  },
};
calculator.calculate('add');
calculator.calculate('subtract');
calculator.calculate('multiply');
calculator.calculate('divide');
