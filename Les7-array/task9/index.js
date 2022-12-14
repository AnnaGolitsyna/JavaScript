const withdraw = (clients, balances, client, amount) => {
  const index = clients.indexOf(client);
  if (balances[index] > amount) {
    balances[index] -= amount;
    return balances[index];
  }
  return -1;
};
// const changeBalance = balances.reduce((acc, element, index) => {
//   if (clients[index] === client && balances[index] > amount) {
//     acc = balances[index] - amount;
//     return (balances[index] = acc);
//   }
//   if (clients[index] === client && balances[index] < amount) {
//     return -1;
//   }

// }, 0);

// return balances;

// example 1:

// input
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));

// output
// 37
// и массив balances должен быть [1400, 37, -6]

// example 2:

// input
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)); withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);

// output
// -1
// и массив balances должен быть [1400, 87, -6]
