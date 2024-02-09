/* eslint-disable no-console */
/* eslint-disable no-undef */

function handleClick() {
  console.log(`From normal function ${this.textContent}`);
}
const handleClick2 = () => {
  console.log(`From arrow function ${this.textContent}`);
};
document.getElementById('myButton').addEventListener('click', handleClick);
document.getElementById('myButton').addEventListener('click', handleClick2);
