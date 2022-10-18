/**
 * @param {object} firstObj
 * @param {object} secondObj
 * @return {boolean}
 */
function compareObjects(firstObj, secondObj) {
  const firstArray = Object.keys(firstObj);
  if (firstArray.length !== Object.keys(secondObj).length) {
    return false;
  }
  return firstArray.reduce((acc, element) => {
    if (firstObj[element] !== secondObj[element]) {
      acc = false;
    };
    return acc;
  }, true);
};

//   if (firstArray.length !== secondArray.length) {
//     return false;
//   }
//   let boolean = true;
//   firstArray.forEach(element => {
//     if (firstObj[element] !== secondObj[element]) {
//       boolean = false;
//     };
//   });
//   return boolean;

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Bob',
  age: 17,
};

const obj5 = {
  age: 17,
  name: 'Bob',
};
console.log(compareObjects(obj1, obj2));
console.log(compareObjects(obj1, obj3));
console.log(compareObjects(obj2, obj3));
console.log(compareObjects(obj2, obj4));
console.log(compareObjects(obj2, obj5));
