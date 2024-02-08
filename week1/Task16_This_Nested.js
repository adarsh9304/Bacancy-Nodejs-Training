/* eslint-disable no-console */
function Car(brand) {
  this.brand = brand;
  this.carInfo = {
    displayInfo: (data) => {
      console.log(`data passed with paramter : ${data} `);
      console.log(`brand name is: ${this.brand}`);
    },
  };
}

const carObj = new Car('Tata punch');
carObj.carInfo.displayInfo('Tata motors');
