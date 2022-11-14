// Algo
// f createCalculator => input -, output - {f}
// memory = 0
// f add => input => num, output => memory + num
// f descrease => input => num, output => memory - num
// f reset => input - und, output => memory = 0
// f getMemo - input - , output => retern memory
// testing some different calc
// export => f createCalculator

export const createCalculator = () => {
  let memory = 0;

  function add(num) {
    return (memory += num);
  }

  function decrease(num) {
    return (memory -= num);
  }

  function reset() {
    return (memory = 0);
  }

  function getMemo() {
    return memory;
  }

  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};

const calculator1 = createCalculator();
console.log(calculator1.add(1));
console.log(calculator1.decrease(2));
// console.log(calculator1.reset());
console.log(calculator1.getMemo());

const calculator2 = createCalculator();
console.log(calculator2.add(5));
console.log(calculator2.decrease(2));
console.log(calculator2.reset());
console.log(calculator2.getMemo());

