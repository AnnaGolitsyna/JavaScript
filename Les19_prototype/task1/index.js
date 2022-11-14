// algo
// export vehicle{} ship{}
// vehicle => m move, stop
// ship => inherit m vehicle,
// * his m startMachine, stpoMachine

const vehicle = {
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};

const ship = {
  name: 'Argo',
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    this.move();
  },
  stopMachine() {
    this.stop();
    console.log(`${this.name} lifting anchor down`);
  },
//   __proto__: vehicle,
};

Object.setPrototypeOf(ship, vehicle);

// export { vehicle, ship };

console.log(vehicle);
console.log(ship);
console.log(ship.move());
ship.startMachine();
ship.stopMachine();
