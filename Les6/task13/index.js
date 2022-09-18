const arrClients = ['Bob', 'Den', 'Tom'];
const arrBalances = [150, 250, 350];

// input => [client], [amount]
// output => if > balance = -1, < = Balance - amount

function withdraw(clients, balances, client, amount) {
  for (let index = 0; index < clients.length; index += 1) {
    if (clients[index] === client) {
      if (balances[index] > amount) {
        balances[index] -= amount;
        return balances[index];
      }
    }
  }
  return -1;
}
console.log('before:', arrBalances);
withdraw(arrClients, arrBalances, 'Tom', 50);
withdraw(arrClients, arrBalances, 'Tom', 400);
withdraw(arrClients, arrBalances, 'Bob', 40);
console.log('after:', arrBalances);
