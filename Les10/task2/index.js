const numbers = [7.17,'3yui', 2, '5', 'kkk5', 6.77, -53, -53.222, undefined, null, NaN, Infinity];

const getParsedIntegers = arr => arr.map(num => Number.parseInt(num));

const getParsedIntegersV2 = arr => arr.map(num => parseInt(num));

const getParsedFloats = arr => arr.map(num => Number.parseFloat(num));

const getParsedFloatsV2 = arr => arr.map(num => parseFloat(num));


console.log(getParsedIntegers(numbers));
console.log(getParsedIntegersV2(numbers));
console.log(getParsedFloats(numbers));
console.log(getParsedFloatsV2(numbers));

console.log(numbers);