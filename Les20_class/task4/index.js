// algo
// 1. create cl Order +++
// constr => input - price, city, type, +++
// ID - random => Math.random().toString() +++
// 2. m checkPrice =>
// * output - boolean +++
// * if sumOrder > 1000 => true +++
// 3. m confimOrder
// * isConfirmed /default false/ = change true,
// * dateConfirmed = dateCreated
// 4. isValidType =>
// * type => input - only 'Buy','Sell' +
// *         output - true if 'Buy' or 'Sell' +

/**
 * @field {string} id +
 * @field {number} price +
 * @field {date} dateCreated +
 * @field {boolean} isConfirmed +
 * @field {date} dateConfirmed +
 * @field {string} city +
 * @field {string} type +
 */
class Order {
  constructor(price, city, type) {
    this.price = Number(price);
    this.city = city.toString();
    this.type = type;
    this.id = Math.random().toString();
    this.isConfirmed = false;
    this.dateCreated = new Date();
    this.dateConfirmed = new Date();
  }

  checkPrice() {
    console.log('price');
    return this.price > 1000;
  }

  confirmOrder() {
    console.log('conform');
    if (this.isConfirmed === false) {
      this.isConfirmed = true;
      console.log((this.dateConfirmed = Date()));
      this.dateConfirmed = this.dateCreated;
    }

  }

  isValidType() {
    console.log('valid', this.type);
    if (this.type === 'Sell' || this.type === 'Buy') {
      return true;
    }
    return false;
  }
}

const order1 = new Order(1500, 'london', 'sel');
console.log(order1);
console.log(order1.checkPrice());
console.log(order1.confirmOrder());
console.log(order1.isValidType('Sell'));
console.log(order1);
