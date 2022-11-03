const getSum = (firstNum, secondNum) => {
  let sum = 0;
  for (let index = firstNum; index <= secondNum; index += 1) {
    if (index % 2 === 0) {
      sum += index;
    }
  }
  return sum;
};
getSum(3, 6);

