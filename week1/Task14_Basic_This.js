/* eslint-disable no-console */
const person = {
  name: 'Adarsh',
  age: 21,

  introduce() {
    console.log(`Name is ${this.name} and Age is ${this.age} `);
  },
};

person.introduce();
