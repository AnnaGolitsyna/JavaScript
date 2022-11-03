/**
 * @param {number[]} numbers
 * @return {number[]}
 */
//
function swap(numbers) {
  // const copyNumbers = [...numbers];

  const [start, ...rest] = numbers;
  const copyNumbers = [...rest, start];
  return copyNumbers;
}

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swapManual(numbers) {
  const copyNumbers = numbers.slice();

  const firstNum = copyNumbers.shift();
  copyNumbers.push(firstNum);

  console.log(numbers);
  console.log(copyNumbers);

  return copyNumbers;
}

// examples
swap([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
swapManual([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
