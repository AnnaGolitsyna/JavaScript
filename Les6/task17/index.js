// input []
// output => isArr - null => number Unique

// const includes = (arr, num) => {
//   for (let index = 0; index < arr.length; index += 1) {
//     const number = arr[index];
//     if (number === num) {
//       return true;
//     }
//   }
//   return false;
// };

// const uniqueCount = arr => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   const arrUnique = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     const element = arr[index];
//     if (!includes(arrUnique, element)) {
//       arrUnique.push(element);
//     }
//   }
//   console.log(arrUnique, arrUnique.length);
//   return arrUnique.length;
// };

const uniqueCount = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }

  const arrUnique = [];
  for (let index = 0; index < arr.length; index += 1) {
    const element = arr[index];
    if (!arrUnique.includes(element)) {
      arrUnique.push(element);
    }
  }

  return arrUnique.length;
};
uniqueCount([1, 4, 1, 8, 3, 4, 8, 8, 5]);
