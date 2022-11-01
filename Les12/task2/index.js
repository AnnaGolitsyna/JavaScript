// input - string
// output - reverse(string)
// Algo
// if not string => null +++
// create [] - split into letters => split('')
// do reverse => use arr.reverse
// return string => join('') without ','
// refactoring and testing

const reverseString = text => {
  if (typeof text !== 'string') {
    return null;
  }
  const reverseText = text.split('').reverse().join('');
  return reverseText;
};

console.log(reverseString('abchtpABC'));
console.log(reverseString(1, 2, 'test'));
