/**
 * @param {number[]} arr
 * @return {number}
 */
// if [!arr] => null => if [] => sumElements

function getSum(arr) {
  //   let sum = 0;
  //   if (!Array.isArray(arr)) {
  //     return null;
  //   }
  //   for (let number of arr) {
  //     sum += number;
  //   }
  //   console.log(sum);
  //   return sum;
  if (!Array.isArray(arr)) {
    return null;
  }
  const sum = arr.reduce((acc, number) => {
    acc += number;
    return acc;
  }, 0);
  console.log(sum);
  return sum;
}

// examples
getSum([1, 10, -10, 4]); // ==> 5
getSum([1]); // ==> 1
getSum([-8, 8]); // ==> 0
getSum(10, 12, 14); // ==> null
