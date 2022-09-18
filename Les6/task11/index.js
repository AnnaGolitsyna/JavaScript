// input => [] => isArr => Let = Min, Max, Sum => loop
// output => sumMinMax > 1000 true

const checker = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  let sum = 0;
  let min = arr[0];
  let max = arr[0];
  for (let index = 0; index < arr.length; index += 1) {
    const number = arr[index];

    if (min > number) {
      min = number;
    }
    if (max < number) {
      max = number;
    }
  }
  console.log('min: ' + min);
  console.log('max: ' + max);
  console.log((sum = min + max));
  console.log(sum > 1000);
  return sum > 1000;
};
checker([5, 2, 3, 999, 6]);
