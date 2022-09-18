// input [1,2,3] => isArr - null => newArr => loop
// => unshift
// output => [3,2,1]

const reverseArray = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }

  const arrReverse = [];
  for (let index = 0; index < arr.length; index += 1) {
    const number = arr[index];
    arrReverse.unshift(number);
  }
  console.log(arr);
  console.log(arrReverse);
  return arrReverse;
};
reverseArray([1, 2, 3, 4, 5]);
reverseArray(1, 2, 3, 4);
