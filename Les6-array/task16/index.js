// inpyt []
// isArr - null => delDubl
// output new [>0]

// const includes = (arr, num) => {
//   for (let index = 0; index < arr.length; index += 1) {
//     const number = arr[index];

//     if (number === num) {
//       return true;
//     }
//   }
//   return false;
// };

// const removeDublicates = arr => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   const arrWithoutDubl = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     const element = arr[index];
//     console.log(!includes(arrWithoutDubl, element), element);

//     if (!includes(arrWithoutDubl, element)) {
//       arrWithoutDubl.push(element);
//     }
//   }
//   console.log(arrWithoutDubl);
//   return arrWithoutDubl;
// };

const removeDublicates = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }

  const arrWithoutDubl = [];
  for (let index = 0; index < arr.length; index += 1) {
    const element = arr[index];

    if (!arrWithoutDubl.includes(element)) {
      arrWithoutDubl.push(element);
    }
  }
  console.log(arrWithoutDubl);
  return arrWithoutDubl;
};
removeDublicates([2, 1, 2, 1, 3, 4, 5, 4, 5]);
