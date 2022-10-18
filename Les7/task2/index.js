// input - arr
// output - copyArr.sort

const sortDesc = arr =>  arr.slice().sort((a, b) => a - b);

const numbers = [22, 2, 5, 100, 56, 4, 48, 1];
console.log(sortDesc(numbers));
console.log(numbers);
