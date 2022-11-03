const numbers = [7.17,'3yui', 2, '5', 6.77, -53, -53.222, undefined, null, NaN, Infinity];

const getFiniteNumbers = arr => arr.filter(num =>  Number.isFinite(num) );

const getFiniteNumbersV2 = arr => arr.filter(num => isFinite(num));

const getNaN = arr => arr.filter(num => Number.isNaN(num));

const getNaNV2 = arr => arr.filter(num => isNaN(num));

const getIntegers = arr => arr.filter(num => Number.isInteger(num));

console.log(getFiniteNumbers(numbers));
console.log(getFiniteNumbersV2(numbers));
console.log(getNaN(numbers));
console.log(getNaNV2(numbers));
console.log(getIntegers(numbers));
console.log(numbers);