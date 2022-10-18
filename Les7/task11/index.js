// input - arr, text, length > 5
// output - arr => filter

const filterNames = (arr, text) => arr.filter(element => element.includes(text) && element.length > 5);

console.log(filterNames(['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'], 'ya'));
