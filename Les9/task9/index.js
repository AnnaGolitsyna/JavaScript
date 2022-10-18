/**
 * @param {string[]} keysList
 * @param {array} valuesList
 * @return {object}
 */
const buildObject = (keysList, valuesList) =>  keysList.reduce((acc, elemnt, index) =>  ({ ...acc, [elemnt]: valuesList[index]}), {});


// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
console.log(result);
