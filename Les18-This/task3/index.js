// algo
// f sumOfSquares - export
// input => numbers /any/
// output => number => sum = num**2 + num**2...
// 1. numbers = []
// 2. sum => reduce

const sumOfSquares = (...args) => [...args].reduce((acc, el) =>  acc + el ** 2, 0);


console.log(sumOfSquares(1, 2, 3)); // => 14
console.log(sumOfSquares(-4, 2, 3));