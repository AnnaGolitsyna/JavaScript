/**
 * @param {number[]} arr
 * @param {number} delta
 * @return {number[]}
 */
// isArr-null => newArr => loop => evenNumber+delta
// output => newArr
const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const evenArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    const element = arr[index];
    if (element % 2 === 0) {
      evenArr.push(element + delta);
    } else {
      evenArr.push(element);
    }
  }
  console.log(evenArr);
  return evenArr;
};

// examples
increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20); // ===> [22, 5, 26, 28, 11, 9, 24]
increaseEvenEl([7, 11, 1], 10); // ===> [7, 11, 1]
increaseEvenEl([], 120); // ===> []
increaseEvenEl(20, 120);
