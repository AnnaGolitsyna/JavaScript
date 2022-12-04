// algo
// create f sum =>
// input - number, output - sum /o-number/
// creat let sum = 0, firstNum = 0
// check if firstNum < num
// * sum add firstNum +1
// * firstNum +1
// * call f some times

let startNumber = 0;
let getSum = 0;
export const sum = num => {
  if (startNumber < num) {
    getSum += startNumber + 1;
    startNumber += 1;
    getSum = sum(num);
  }
  return getSum;
};

console.log(sum(4));
