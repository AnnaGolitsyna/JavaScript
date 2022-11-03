// input => text, partText
// output => number
// Algo:
// if partText /empty/ => null +++
// if text = undefind => text = /empty/ ??
// iterate 'text' => how many partText
/// check split


const countOccurrences = (text, str) => {
  if (str.length === 0) {
    return null;
  }
  const newText = text || '';
  const result = newText.split(str);
  return result.length - 1;
};
console.log(countOccurrences('extexttextex', 'ex'));
console.log(countOccurrences('AlexAlexAlalsAlexAlAl', 'Al'));
console.log(countOccurrences('texts', ''));
console.log(countOccurrences(undefined, 't'));
