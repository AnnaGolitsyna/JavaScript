// input - string '1 + 2', possible + - * /
// output - string '1 + 2 = result'
// Algo
// split string => split(' ') => ['1', '+', '2'] +++
// let result => switch/case +++
// console => 'input = result' +++
// refactoring +++

const calc = expression => {
  const [a, operator, b] = expression.split(' ');

  let result;
  switch (operator) {
    case '+':
      result = +a + +b;
      break;

    case '-':
      result = +a - +b;
      break;

    case '*':
      result = +a * +b;
      break;

    case '/':
      result = +a / +b;
      break;

    default:
      break;
  }

  return `${expression} = ${result}`;
};
console.log(calc('1 + 2'));
console.log(calc('5 - 2'));
console.log(calc('-1 * 2'));
console.log(calc('1 / -2'));
console.log(calc('1 / null'));
