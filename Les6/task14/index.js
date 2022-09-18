const getSubArray = (arr, numberOfElements) => {
  const arrFirstElements = [];

  for (let index = 0; index < numberOfElements; index += 1) {
    arrFirstElements.push(arr[index]);
  }
  console.log(arrFirstElements);
  return arrFirstElements;
};

getSubArray([11, 4, 8, 3], 2);
getSubArray([1, 2, 3, 4, 5], 3);
