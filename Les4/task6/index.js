const start = 1;
const end = 20;
let result = 0;
for (let index = start; index <= end; index += 1) {
  if (index % 5 === 0) {
    console.log('5 :', index);
  } else if (index % 2 === 0 && index % 4 !== 0) {
    console.log('2 and not 4 :', index);
    result += index;
  } else if (index % 3 === 0) {
    console.log('3 :', index);
    result -= index;
  } else if (index % 4 === 0) {
    console.log('4 :', index);
    result *= index;
  }
}
