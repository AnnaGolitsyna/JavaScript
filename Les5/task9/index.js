/**
 * @param {number} num
 * @return {undefined}
 */
function getPrimes(num) {
  for (let index = 2; index <= num; index += 1) {
    let count = 0;
    for (let i = 1; i <= num; i += 1) {
      if (index % i === 0) {
        count += 1;
      }
    }
    if (count === 2) {
      console.log(index);
    }
  }
}
getPrimes(19);
