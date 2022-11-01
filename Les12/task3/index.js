// input - array
// output - array ['$1.90', '$2.50'...]

// Algo
// 1. iterate array => filter
// 2. check element for letter, if yes => away => Number()

// 3. is after ',' < 00 => + 0 => toFixed
//   *in start add $ => in retern `${}`

// 4. refactoring + testing

const transactions = ['  1.9', '16.4', 17, '  1 dollaAr '];

const cleanTransactionsList = arr =>  arr.filter(element => Number(element))
  .map(num =>  `$${Number(num).toFixed(2)}`);


console.log(cleanTransactionsList(transactions));
console.log(transactions);

//* first var => refactoring

// ['  1.9', '16.4', '17,  ', '  1 dollaAr '].map(
//   string =>
//     `$${Number(
//       string
//         .split(/[a-z,A-Z]/)
//         .join('')
//         .trim()
//         .replaceAll(',', '.'),
//     ).toFixed(2)}`,
// );

//*  second var =>

// ['  1.9', '16.4', '17,  ', '  1 dollaAr '].map(string => `$${parseFloat(string, 10).toFixed(2)}`)
//
// (4)[('$1.90', '$16.40', '$17.00', '$1.00')];
