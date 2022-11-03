// Algo
// 1.Create function => input[], output - number
// * [-777, 3, -2, 6, 45, -20] => 4
// 1.1 if arr not [] or [empty] => null +++
// 1.2 in arr only number => must
// 1.3 find min module number => iterate [], used - map + /abc/
// 1.4 return => Math/min(...[]) num**2
// 2. jest test
//  * if input arr[empty] +++
//  * if input 'string' +++
//  * if input arr[numbers] +++

export const getMinSquaredNum = arr => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  return Math.min(...arr.map(num => Math.abs(num)))**2;
};
console.log(getMinSquaredNum([-777, 3, -2, 6, 45, -20]));
console.log(getMinSquaredNum('-777, 3, -2, 6, 45, -20'));
console.log(getMinSquaredNum([]));
