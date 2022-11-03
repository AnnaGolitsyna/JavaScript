// input - arr
// output - number => reduce - sum

const sum = arr => arr.reduce((acc, number) => (acc += number));

const numbers = [2, 5, 6, 3, 0, 3, -1, ];
console.log(sum(numbers));
