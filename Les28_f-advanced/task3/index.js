// algo
// create f mult
// create f twice => twice(7)mult(2)
// create f triple => triple(9)mult(3)
// all f => export

export const mult = num1 => num2 => num1 * num2;


const twice = num => mult(2)(num);


const triple = num => mult(3)(num);


export { twice, triple };
