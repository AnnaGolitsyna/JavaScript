/**
 * @param {number[]} arr
 * // 1) sum 2)   3) format
 * @return {number} sum - format'$17.15'
 */
const getTotalPrice = arr => {
  const result = Math.trunc(arr.reduce((acc, num) => acc + num, 0) * 100) / 100;
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(result);
};

// examples
console.log(getTotalPrice([-10.56324, 10.9654, 10.3254])); // ===> 10
console.log(getTotalPrice([2.12645, 2, 1.6789])); // ===> 2.1
