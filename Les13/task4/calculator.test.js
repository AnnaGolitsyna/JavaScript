import { calc } from './calculator';

it('should check correct operation of the operator', () => {
  const plus = calc('1 + 2');
  expect(plus).toEqual('1 + 2 = 3');

  const minus = calc('1 - 2');
  expect(minus).toEqual('1 - 2 = -1');

  const multiply = calc('1 * 2');
  expect(multiply).toEqual('1 * 2 = 2');

  const divide = calc('1 / 2');
  expect(divide).toEqual('1 / 2 = 0.5');
});

it('sould testing not \'string\' on input', () => {
    const result = calc(1 / 2);;
    expect(result).toEqual(null);
});
