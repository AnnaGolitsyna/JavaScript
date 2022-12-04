// algo
// create f - export =>
// input - number > 0
// output - max numFib < number
// create let numFib
// find all numFib => add to let numFib

let firstNum = 0;
let secondNum = 1;
let sumFib = 0;

export const maxFibonacci = num => {
  if (firstNum + secondNum <= num) {
    sumFib = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = sumFib;
    sumFib = maxFibonacci(num);
  }

  return sumFib;
};
// console.log(maxFibonacci(15));
console.log(maxFibonacci(71));
