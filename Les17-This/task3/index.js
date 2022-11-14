// algo
// 1. create f defer
// input => (func, ms)
// output => new f
// 2. creat new f => (funs(arg), ms)

function defer(func, ms) {
  return function () {
    setTimeout(() => func.apply(this, arguments), ms);
  };
}

const user = {
  name : 'Anna',
  sayHello() {
    console.log(`Hello, i am ${this.name}`);
  }
}

const deferredHello = defer(user.sayHello, 2000);
deferredHello.call(user);