// algo
// create cl Wallet => export
// balance = 0
// m getBalance => return balance
// m deposit => + amount
// m withdraw => - amount
// * if balance < amount => text and stop

class Wallet {
  #balance = 0;

  getBalance() {
    return this.#balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (this.#balance < amount) {
      console.log('No enough funds');
      return;
    }
    this.#balance -= amount;
  }
};

const wal1 = new Wallet();

console.log(wal1);
console.log(wal1.deposit(50));
console.log(wal1.getBalance());
console.log(wal1.withdraw(10));
console.log(wal1.getBalance());
console.log(wal1.withdraw(20));
console.log(wal1.getBalance());
