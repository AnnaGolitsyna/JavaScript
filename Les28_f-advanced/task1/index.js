// algo
// create f => input - startValue, output - {}
// create obj => methods
// create let
// => +,-,*,/, result return result

const calc = startValue => {
  let resultValue = startValue;
  const objCalc = {
    add(value) {
      resultValue += value;
      return this; // this = object Calc
    },
    subtract(value) {
      resultValue -= value;
      return this;
    },
    mult(value) {
      resultValue *= value;
      return this;
    },
    div(value) {
      resultValue /= value;
      return this;
    },
    result() {
      return resultValue;
    },
  };
  return objCalc; // methods obj => output number /resultValue/
};

const test = calc(3).add(2).mult(4).div(1).subtract(10).result(); // -3
console.log(test);
