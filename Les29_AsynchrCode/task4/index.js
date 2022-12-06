// algo
// create any f
// create f delay => call f after some time
// * input - number/timeout/, callback, context, ...args for callback

export function showMessage(firsttext, secondText) {
  console.log(this);
  console.log(`${firsttext}, ${secondText} ${this.name}`);
}

const user = { name: 'Bob' };


export const delay = (timeout, callback, context, ...args) => {
  setTimeout(() => {
    callback.call(context, ...args);
  }, timeout);
};

delay(1000, showMessage, user, 'Hello', 'my name is');
