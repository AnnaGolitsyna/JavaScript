/**
 * @param {number} from
 * @param {number} to
 * @return {number[]}
 */
// [] => loop => if (%3===0) => [i]
function getSpecialNumbers(from, to) {
  const specialNumbers = [];
  for (let index = from; index <= to; index += 1) {
    if (index % 3 === 0) {
      specialNumbers.push(index);
    }
  }
  console.log(specialNumbers);
  return specialNumbers;
}

// examples
getSpecialNumbers(1, 10); // ==> [3, 6, 9]
getSpecialNumbers(-10, 10); // ==> [-9, -6, -3, 0, 3, 6, 9]
getSpecialNumbers(1, 2); // ==> [ ]
