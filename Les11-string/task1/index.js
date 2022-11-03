// input => string, number
// output => St \n-Ri \n-Ng

// Algo:
// if not string => null +++
// разделить строку /split the string +++
// if number/undefind/ => 10 +++
// first letter toUperrCase +++
// return => St \n-Ri \n-Ng +++

function splitText(string, len) {
  if (typeof string !== 'string') {
    return null;
  }
  if (len === undefined) {
    len = 10;
  }
  const textArr = [];

  for (let index = 0; index < string.length; index += 1) {
    const cut = string.substr(index, len);
    if (cut.length === 0) {
      break;
    }
    textArr.push(cut[0].toLocaleUpperCase() + cut.slice(1));
    index += len - 1;
  }

  return textArr.join('\n');
}

console.log(splitText('alexandr', 3));
console.log(splitText('alexandriya'));
console.log(splitText('victory', -1));
console.log(splitText('return', 2));
console.log(splitText(10, 3));
