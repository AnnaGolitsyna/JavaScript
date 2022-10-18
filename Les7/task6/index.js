// input - array[]
// output - reverseArr
// 1.isArray
// 2.sort

const numbers = [1, 2, 3, 4, 5, 6];

const reverseArray = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const reverseArr = arr.slice().reverse();
  return reverseArr;
};

console.log(numbers);
console.log(reverseArray(numbers));
