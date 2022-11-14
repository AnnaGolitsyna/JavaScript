// algo
// 1. export wallet {}
// in wallet =>
// 1.1 transactions []
// 1.2 f getMax => output - max.trans
// 1.2 g getMin => output - min.trans

const wallet = {
  transactions: [2, 6, 55, 8, 1, 100],
  getMax() {
    return Math.max(...this.transactions);
  },
  getMin(){
    return Math.min(...this.transactions);
  }
};
console.log(wallet);
console.log(wallet.getMax());
console.log(wallet.getMin());
