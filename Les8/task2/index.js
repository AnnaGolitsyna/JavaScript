/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

/* Для решения этой задачи используй for..in цикл.
// В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries().
// Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен
// аннотацией eslint-disable
 * */

const concatProps = obj => {
  const propsArray = [];
  for (let key in obj) {
    propsArray.push(obj[key]);
  }
  return propsArray;
};
// examples
console.log(concatProps({ name: 'John Doe', age: 17, interest: 'football' })); // ==> ['John Doe', 17, 'football']
