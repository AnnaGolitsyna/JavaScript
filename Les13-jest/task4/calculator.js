/* eslint-disable default-case */

// Algo
// jest test - new file
// *operators '+ - * /' +++
// *input not 'string' +++


export const calc = expression => {
  if (typeof expression !== 'string') {
    return null;
  }

  const [a, operation, b] = expression.split(' ');
  let result;

  switch (operation) {
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
  }

  return `${expression} = ${result}`;
};
console.log(calc('1 + 2')); // 1 + 2 = 3
console.log(calc('1 - 2')); // 1 - 2 = -1
console.log(calc('1 * 2')); // 1 * 2 = 2
console.log(calc('1 / 2')); // 1 / 2 = 0.5
console.log(calc(1 / 2)); // null
console.log(calc( )); // null
