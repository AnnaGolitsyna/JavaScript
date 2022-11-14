// algo
// change {} => class

// eslint-disable-next-line max-classes-per-file
class Vehicle {

  constructor(name, numberOfWheels) {
    this.name = name;
    this.numberOfWheels = numberOfWheels;
  }

  move() {
    console.log(`${this.name} is moving`);
  }

  stop() {
    console.log(`${this.name} stopped`);
  }
};

class Ship extends Vehicle {
  constructor(name, maxSpeed) {
    super(name, 0);
    this.maxSpeed = maxSpeed;
  }

  move() {
    console.log(`${this.name} lifting anchor up`);
    super.move();
  }

  stop() {
    super.stop();
    console.log(`${this.name} lifting anchor down`);
  }
};

// export { Vehicle, Ship };
const ship1 = new Ship('Argo', 17);
console.log(ship1);
console.log(ship1.move());
console.log(ship1.stop());
