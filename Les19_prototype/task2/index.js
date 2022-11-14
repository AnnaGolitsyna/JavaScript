// algo
// create f getOwnProps
// input => obj
// output => arr[only props]
const vehicle = {
  ppp: true,
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};

const ship = {
  name: 'Argo',
  age: 10,
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
  },
  stopMachine() {
    console.log(`${this.name} lifting anchor down`);
  },
};

Object.setPrototypeOf(ship, vehicle);

function getOwnProps(obj) {
  const arrProps = [];
  for (const prop in obj) {
    if (typeof obj[prop] !== 'function' && obj.hasOwnProperty(prop)) {
      arrProps.push(prop);
    }
  }
  return arrProps;
}

console.log(getOwnProps(ship));
console.log(ship);
