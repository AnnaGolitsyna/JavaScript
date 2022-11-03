// input = arr
// output = arr.map

const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const increaseEvenElement = arr.map(number => {
    if (number % 2 === 0) {
      return (number += delta);
    }
    return number;
  });
  return increaseEvenElement;
};

console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20));
