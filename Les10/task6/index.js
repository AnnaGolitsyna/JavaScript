/**
 * @param {number} length
 * @param {number} from
 * @param {number} to
 * @return {number[]}
 */

const getRandomNumbers = (length, from, to) => {
  if (Math.trunc(to) - Math.trunc(from) < 1) {
    return null;
  }

  const min = Math.ceil(from);
  const max = Math.floor(to);

  const arrRandomNumbers = new Array(length).fill(1);
  return arrRandomNumbers.map(() => Math.round(Math.random() * (max - min) + min));
};

// for (let index = 0; index < length; index += 1) {
//   arrRandomNumbers.push(Math.round(Math.random() * (to - from) + from));
// }

// for (let index = 0; index < length; index += 1) {
//   console.log(Math.random() * (to - from) + from);
// }
// examples
console.log(getRandomNumbers(5, 1.5, 3.22)); // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(5, 1.5, 3.22)); // ==> [3, 2, 2, 2, 2]
console.log(getRandomNumbers(5, 1.5, 3.22)); // ==> [3, 2, 2, 2, 2]
console.log(getRandomNumbers(3, 2.4, 4.5)); // ==> [4, 3, 4]
console.log(getRandomNumbers(3, 1.9, 2.5)); // ==> [2, 2, 2]
console.log(getRandomNumbers(50, 90.5, 95));
// getRandomNumbers(5, 1.4, 3.22); // ==> [3, 3, 2, 3, 2]
// getRandomNumbers(3, 2.4, 4.5); // ==> [4, 3, 4]
// getRandomNumbers(3, 1.9, 2.5); // ==> [2, 2, 2]

// getRandomNumbers(10, 8, 17.5);
// getRandomNumbers(10, 8, 17.5);
// getRandomNumbers(10, 8, 17.5);
// getRandomNumbers(10, 8, 17.5);
// getRandomNumbers(10, 8, 17.5);
// getRandomNumbers(10, 8, 17.5);

console.log(getRandomNumbers(7, 1.5, 1.9)); // ==> null
console.log(getRandomNumbers(7, 2.11, 2.9)); // ==> null
console.log(getRandomNumbers(1, 2.5, 0.9)); // ==> null
