const cloneCar = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  [cloneCar]() {
    return new this.constructor(this.brand, this.motor, this.color);
  }

  cloneCar() {
    return this[cloneCar]();
  }
}
