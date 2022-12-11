// algo
// 1. create f asyncSum - export
// input => some promise resolve(number)
// output => promise
// * get sum all numbers - f getSum (3) +++
// * reject Error 'Can't calculate' - if find min 1 reject promise
// 2. create f =>
// * input = number
// * output = promises for args asyncSum
// 3. create f - getSum =>
// * input - promiseArr
// * output - sum /number/
// * get sum all numbers +++
// * filter isNAN value +++
const getValue = (number, delay) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(number);
    }, delay);
  });

const asyncNumber = getValue(10, 0);
const asyncNumber1 = getValue('aaa', 1000);
const asyncNumber3 = getValue('5', 1500);
const asyncNumber2 = getValue(15, 2000);

export const getSum = numArr =>
  numArr.filter(num => !isNaN(num)).reduce((acc, num) => acc + Number(num), 0);

export const asyncSum = (...args) =>
  Promise.all(args)
    .then(value => getSum(value))
    .catch(() => Promise.reject(new Error('Can\'t calculate')));



asyncSum(asyncNumber, asyncNumber1, asyncNumber2, asyncNumber3).then(result => console.log(result));
