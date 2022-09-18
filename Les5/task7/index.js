/**
 * @param {number} from
 * @param {number} to
 * @return {number}
 */
const sum = (from, to) => {
  let result = 0;
  for (let number = from; number <= to; number += 1) {
    result += number;
  }
  return result;
};

/**
 * @param {number} firstFrom
 * @param {number} firstTo
 * @param {number} secondFrom
 * @param {number} secondTo
 * @return {boolean}
 */
const compareSums = (firstFrom, firstTo, secondFrom, secondTo) => 
   sum(firstFrom, firstTo) > sum(secondFrom, secondTo);


// examples
sum(5, 10); // ===> 45
sum(11, 11); // ===> 11

console.log(compareSums(5, 10, 5, 10)); // ===> false
console.log(compareSums(5, 15, 3, 5)); // ===> true
console.log(compareSums(-2, 5, 5, 9)); // ===> false
