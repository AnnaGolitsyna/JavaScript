// input - arr[arr1, arr2]
// output - arr.reduce.concat.sort

const flatArray = arr =>
arr.reduce((acc, element) =>
acc.concat(element), []).sort((a, b) => a - b);

const flatArray2 = arr => arr.flat().sort((a, b) => a - b);

const numbers = [[22, 2], 5, [100, 56], [4, 48], 1];
console.log(flatArray(numbers));
console.log(numbers !== flatArray(numbers));
console.log(flatArray2(numbers));
console.log(flatArray2(numbers) !== numbers);
