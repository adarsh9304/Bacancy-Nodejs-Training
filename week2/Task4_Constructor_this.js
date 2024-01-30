/* eslint-disable no-console */
/* eslint-disable func-names */
class Car {
  constructor(name, brand, year) {
    this.name = name;
    this.brand = brand;
    this.year = year;
    this.displayInfo = function () {
      console.log(`The Name of Car is ${name} which is powered by ${brand} in year ${year}`);
    };
  }
}
const CarObj = new Car('Tiago EV', 'TATA', '2022');
CarObj.displayInfo();
