// input => text, number/3/
// output => ['tex', 't..']
// Algo:
// if not string => null
// if number/undefind/ => 10
// разделить строку /split the string
// добавить . до необходимой длины в последнем элементе /padEnd/
// return => []

function splitString(text, len = 10) {
  if (typeof text !== 'string') {
    return null;
  }
  const textArr = [];
  for (let index = 0; index < text.length; index += len) {
    const cut = text.substring(index, index + len);
    textArr.push(cut.padEnd(len, '.'));
  }
  return textArr;
}

console.log(splitString('alexandr', 3));
console.log(splitString('alexandriya'));
// console.log(splitString('victory', -1));
console.log(splitString('return', 4));
console.log(splitString(10, 3));
