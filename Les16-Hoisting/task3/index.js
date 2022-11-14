// algo
// create export f createArrayOfFunctions =>
// input - number /arr.length/
// output - [f(i), ...]
// example f (9)[5]() => 5
// 1. if input not number => null
// 2. if input undefind => [empty]
// 3. iterate 0 - number
// 3.1 all element => f - retern index
// 4. refactoring + testing

var arrOfFunctions = [];
export const createArrayOfFunctions = num => {
  if (num === undefined) {
    return [];
  }
  if (Number.isInteger(num)) {
    for (let i = 0; i < num; i += 1) {
      arrOfFunctions[i] = function () {
        return i;
      };
    }
    return arrOfFunctions;
  }
  return null;
};
console.log(createArrayOfFunctions(9)[5]());
console.log(createArrayOfFunctions('t'));
console.log(createArrayOfFunctions('9'));
console.log(createArrayOfFunctions());
