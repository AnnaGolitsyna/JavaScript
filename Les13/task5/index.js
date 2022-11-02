//* task 1

// input - array[]
// output - reverseArr
// 1.isArray
// 2.sort

const numbers = [1, 2, 3, 4, 5, 6];

export const reverseArray = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const reverseArr = arr.slice().reverse();
  return reverseArr;
};

console.log(numbers); // [1, 2, 3, 4, 5, 6]
console.log(reverseArray(numbers)); // [6,5,4,3,2,1]
console.log(reverseArray('numbers')); // null

//* task 2
export const withdraw = (clients, balances, client, amount) => {
  const index = clients.indexOf(client);
  if (balances[index] > amount) {
    balances[index] -= amount;
    return balances[index];
  }
  return -1;
};


// example 1:

// input
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));

// output => 37

// и массив balances должен быть [1400, 37, -6]

// example 2:

// input
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));

// output => -1

// и массив balances должен быть [1400, 87, -6]

// example 3:
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Ann', 100));
// output => 1300


// task 3
export const getAdults = obj => {
  const adultsObject = {};
  for (let key in obj) {
    if (obj[key] >= 18) {
      adultsObject[key] = obj[key];
    }
  }
  return adultsObject;
};

// examples
console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })); // ==> { John Doe: 19, Bob: 18 }
console.log(getAdults({ Ann: 56, Andrey: 7 })); // ==> { Ann: 56 }
console.log(getAdults({})); // => {}