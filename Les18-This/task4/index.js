// algo
// f saveFuncCalls - export
// input = func
// output = f withMemory =>
// 1. create arrFuncCalls[[f()], [f()]...]
// 2. repeat func
// 3. save all () in callsHistory: arrFuncCalls [all calls]

// 'use strict';

/**
 * @param {function} func
 * @return {function}
 */


function saveFuncCalls(func) {
  const arrFuncCalls = [];

  return function withMemory(...rest) {
    arrFuncCalls.push(rest);
    withMemory.callsHistory = arrFuncCalls;
    return func.call(this, ...rest);
  };
}

function sum(firstNum, secondNum) {
  return firstNum + secondNum;
}
// sumWithMemory === withMemory
// example 1
// const sumWithMemory = saveFuncCalls(sum); записиваем результа функции в переменную, а результат єто функция withMemory
// console.log(sumWithMemory(4, 2)); // ===> 6
// sumWithMemory(9, 1); // ===> 10

// console.log(sumWithMemory.callsHistory); // ===> [ [4, 2], [9, 1] ]

// example 2
function addDelta(array, delta) {
  return array.map(el => el + delta);
}

const addDeltaWithMemory = saveFuncCalls(addDelta);
addDeltaWithMemory([111, 22, 55, 4], 8); // ===> [119, 30, 63, 12]
addDeltaWithMemory([9, 1, -8, 15, 7, 0], 7); // ===> [16, 8, -1, 22, 14, 7]

console.log(addDeltaWithMemory.callsHistory); // ===> [ [[111, 22, 55, 4], 8], [[9, 1, -8, 15, 7, 0], 7] ]

// // example 3
const user = {
  name: 'John',
  sayHi() {
    return this.name;
  },
};

const sayHiWithMemory = saveFuncCalls(user.sayHi);
// sayHiWithMemory(); // ===> throw error // because sayHiWithMemory lost context
const sayHiWithMemoryBinded = sayHiWithMemory.bind({ name: 'Tom' });
console.log(sayHiWithMemoryBinded()); // ===> Tom // because we fixed context with bind and run functon again

console.log(sayHiWithMemory.callsHistory); // [ [] ]

// const saveFuncCalls1 = func => {
//   const arrFuncCalls = [];

//   return function withMemory(...rest) {
//     arrFuncCalls.push(rest);
//     withMemory.callsHistory = arrFuncCalls;

//     // const test = func.call(this, ...rest);

//     return func(...rest);
//   };
// };

// const sayHiWithMemory1 = saveFuncCalls1(user.sayHi);
// const sayHiWithMemoryBinded1 = sayHiWithMemory1({ name: 'Tom' });
// console.log(sayHiWithMemoryBinded1()); // ===> Tom // because we fixed context with bind and run functon again

// console.log(sayHiWithMemory1.callsHistory); // [ [] ]
