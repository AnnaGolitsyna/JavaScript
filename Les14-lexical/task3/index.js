// Algo
// memory = 0
// f add => input => num, output => memory + num
// f descrease => input => num, output => memory - num
// f reset => input - und, output => memory = 0
// f getMemo - input - , output => retern memory
// all f - export

let memory = 0;
console.log(memory);

export function add (num) {
    memory += num;
}
console.log(add(3));
console.log(memory);

export function decrease (num) {
    memory -= num;
}
console.log(decrease(1));
console.log(memory);

export function reset () {
    memory = 0;
}
console.log(reset());
console.log(memory);

export function getMemo () {
    return memory;
}
console.log(getMemo());
console.log(memory);





