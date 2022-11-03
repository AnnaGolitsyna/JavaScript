// input - arr
// output - arr.filter(num % 3 === 0)

const getSpecialNumbers = arr => arr
  .filter(number => number % 3 === 0);

const numbers = [1, 2, 5, 3, 9, 30,12, 11, 15];
console.log(getSpecialNumbers(numbers));
