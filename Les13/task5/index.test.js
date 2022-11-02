import { reverseArray, withdraw, getAdults } from './index.js';

it('should get reverse array', () => {
  const resNumber = reverseArray([1, 2, 3, 4, 5, 6]);
  expect(resNumber).toEqual([6, 5, 4, 3, 2, 1]);

  const resString = reverseArray(['ab', 'cd', 'fg']);
  expect(resString).toEqual(['fg', 'cd', 'ab']);
});

it('should testing array on input', () => {
  const type = reverseArray('numbers');
  expect(type).toEqual(null);
});

it('should get account balance', () => {
  const resBalance1 = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
  expect(resBalance1).toEqual(37);

  const resBalance2 = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);
  expect(resBalance2).toEqual(-1);

  const resBalance3 = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Ann', 100);
  expect(resBalance3).toEqual(1300);
});

it('should get empty object', () => {
  const emptyObj = getAdults({});
  expect(emptyObj).toEqual({});
});

it('should find all people older 18', () => {
  const adultPeople1 = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
  expect(adultPeople1).toEqual({'John Doe': 19, Bob: 18});

  const adultPeople2 = getAdults({ Ann: 56, Andrey: 7 });
  expect(adultPeople2).toEqual({ Ann: 56 });

});
