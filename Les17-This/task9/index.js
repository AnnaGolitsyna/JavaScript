// algo
// input => func, context, arguments
// output => new f
// 1. create obj
// 2. create method call => input (this, arg)
// 3. create f bind => input (call, this, arg)


const bind =
(func, context, ...boundArg) =>
(...arg) =>
func.apply(context, [...boundArg, ...arg]);

function getGreeting(greeting, punctuation) {
  return `${greeting} ${this.userName}${punctuation}`;
}

const nameTom = { userName: 'Tom' };
const message = bind(getGreeting, nameTom);

console.log(message('Hello,', '!'));

const user = {
  userName: 'Anna',
  age: 46,
};

// const nameAnna = {userName: 'Anna'}

const message2 = bind(getGreeting, user);
console.log(message2('Hello,', '!'));
