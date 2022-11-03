// input - arr,
// output - number => isArray, reduce - average

const arrAverage = arr => {
    if (!Array.isArray(arr)) {
        return null;
    }
  return arr.reduce((acc, number) => acc += number)
    / arr.length;

};

console.log(arrAverage([2, 5, 6, 3]));
