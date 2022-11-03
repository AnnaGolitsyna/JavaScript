/**
 * @param {number[]} arr
 * @return {number[]}
 */
// is[] => copyArr => loop => i**=2
function squareArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const copyArr = [...arr];
  for (let index = 0; index < copyArr.length; index += 1) {
    copyArr[index] **= 2;
  }
  console.log(copyArr);
  return copyArr;
}

// examples
squareArray([1, 10, 9, 11]); // ==> [1, 100, 81, 121]
squareArray([10, 0, -4]); // ==> [100, 0, 16]
squareArray([1]); // ==> [1]
squareArray(1);
