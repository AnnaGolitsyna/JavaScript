/**
 * @param {number} num
 * @param {number} prec
 * @return {number[]}
 */
const superRound = (num, prec) => {
  const number = (num.toFixed(prec + 1));
  
  return [
    Math.floor(number * 10 ** prec) / 10 ** prec,
    Math.trunc(number * 10 ** prec) / 10 ** prec,
    Math.ceil(number * 10 ** prec) / 10 ** prec,
    Math.round(number * 10 ** prec) / 10 ** prec,
    Number(num.toFixed(prec)),
  ];
};

// examples
console.log(superRound(11.12556, 3)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
// console.log(superRound(6.11, 3)); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]
console.log(superRound(-11.12556, 4)); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]
// console.log(superRound(-11.12556, 2));
// console.log(superRound('11.12556', 2));
