/**
 * @param {number[]} arr
 * @return {boolean}
 */

// isArr-null => loop => sum => > 100 true
const checkSum = arr => {
  if (!Array.isArray(arr)) {
    console.log(null);
    return null;
  }
  let sum = 0;
  for (let index = 0; index < arr.length; index += 1) {
    const number = arr[index];
    sum += number;
  }
  console.log(sum > 100);
  return sum > 100;
};

// examples
checkSum([10, 10, 10]); // ===> false
checkSum([10, 99, 1]); // ===> true
checkSum([-6, -3, 200]); // ===> true
checkSum(-6, -3, 200);
