// Algo
// 1.create function
// 1.1 getSquaredArray /export name/ => input([a, b])-output(a**2, b**2)
// 1.2 getOddNumbers /export name/ => input([a, b])-output([filter odd])
// 1.3 function /default/ => input(a, b)-output(a+b)
// 2. jest test all function

export const getSquaredArray = arr => arr.map(num => num ** 2);

export const getOddNumbers = arr => arr.filter(num => num % 2 !== 0);

const getSum = (a, b) => a + b;
export default getSum();

console.log(getSquaredArray([1, 2, 3, 4, 5]));
console.log(getOddNumbers([1, 2, 3, 4, 5]));
console.log(getSum(2, 5));
