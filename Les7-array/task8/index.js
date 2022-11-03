// input = arr
// output = newArr

const numbers = [5, 8, 1, 4, 9, 6];
const cloneArr = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  
  return [...arr];
};

console.log(cloneArr(numbers));
