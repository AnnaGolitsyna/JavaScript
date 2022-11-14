// part 1

// function getFullName() {
//   console.log('hello', this);
// }
// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   fullName: getFullName,
// };

// console.log(user);

// part 2

// function hello () {
//   console.log('hello', this);
// }
// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   sayHello: hello,
//   logInfo: function () {
//     console.log(`My name is ${this.firstName}`);
//     console.log(`My surname is ${this.lastName}`);
//   }
// };

// const lena = {
//   firstName: 'Elena',
//   lastName: 'Kuth',
// };

// user.logInfo();
// user.logInfo.bind(lena)();

// part 3

function hello() {
  console.log('hello', this);
}
const user = {
  firstName: 'John',
  lastName: 'Doe',
  sayHello: hello,
  logInfo: function (job, phone) {
    console.group(`${this.firstName} is:`);
    console.log(`My name is ${this.firstName}`);
    console.log(`My surname is ${this.lastName}`);
    console.log(`My job is ${job}`);
    console.log(`My phone is ${phone}`);
    console.groupEnd();
  },
};

const lena = {
  firstName: 'Elena',
  lastName: 'Kuth',
};

user.logInfo();
user.logInfo.bind(lena, 'frontend', '88 99 22')();
user.logInfo.call(lena, 'frontend', '88 99 33');
user.logInfo.apply(lena, ['frontend', '88 99 44']);
