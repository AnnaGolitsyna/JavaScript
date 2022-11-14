function calculator(a, b) {
  switch (this.operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '/':
      return a / b;
    case '*':
      return a * b;
    default:
      return NaN;
  }
}

/*
 * Ф-ция multiplier должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 2 числа и возвращать из произведение
 */

const multiplier = calculator.bind({ operation: '*' });

console.log(multiplier(2, 3));
console.log(multiplier(0, 3));
console.log(multiplier(-5, 3));

/*
 * Ф-ция summator должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 2 числа и возвращать из сумму
 */

const summator = calculator.bind({ operation: '+' });

console.log(summator(2, 3));
console.log(summator(0, 3));
console.log(summator(-5, 3));

/*
 * Ф-ция twice должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 1 число и возвращать это число умноженное на 2
 */

const twice = calculator.bind({ operation: '*' }, 2);

console.log(twice(2));
console.log(twice(0));
console.log(twice(-5));
