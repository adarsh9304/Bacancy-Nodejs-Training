/* eslint-disable no-console */
class Car {
  constructor(name, brand, year) {
    this.name = name;
    this.brand = brand;
    this.year = year;
  }

  displayInfo() {
    console.log(`The Name of Car is ${this.name} which is powered by ${this.brand} in year ${this.year}`);
  }
}
const CarObj = new Car('Tiago EV', 'TATA', '2022');
CarObj.displayInfo();
