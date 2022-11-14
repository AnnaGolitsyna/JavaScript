// algo
// creat constr => f User +++
// input => name, age +++
// output => name, age +++
// in proto => m SayHi, requestNewPhoto, setAge
// setAge => input => new age
// * output => new age if age >= 25, || false if < 0 || value if >= 0

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static createEmpty() {
    return new User('', null);
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(newAge) {
    if (newAge < 0) {
      return false;
    }

    this.age = newAge;
    if (newAge >= 25) {
      this.requestNewPhoto();
    }
    return this.age;
  }
}

console.log(User.createEmpty());

const person = new User('John', 46);
console.log(person);
// const person1 = new
// person.sayHi();
// person.requestNewPhoto();

console.log(person.setAge(-2));
console.log(person);

console.log(person.setAge(25));
console.log(person);

console.log(person.setAge(28));
console.log(person);

console.log(person.setAge(0));
console.log(person);
