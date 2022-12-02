// algo
// create f compose - export
// => input - any f /input - one arg/ and value , output - f

const add2 = value => value + 2;
const square = value => value * value;
const half = value => value / 2;

export const compose =
  (...funcs) =>
  value =>
    funcs.reduce((acc, func) => func(acc), value);

const superFunc = compose(add2, square, half);

export { add2, square, half, superFunc };
