// algo
// creat constr => f User +++
// input => name, age +++
// output => name, age +++
// in proto => m SayHi, requestNewPhoto, setAge
// setAge => input => new age
// * output => new age if age >= 25, || false if < 0 || value if >= 0

function User(name, age) {
  this.name = name;
  this.age = age;

  User.prototype.sayHi = function () {
    console.log(`Hi, I am ${this.name}`);
  };

  User.prototype.requestNewPhoto = function () {
    console.log(`New photo request was sent for ${this.name}`);
  };

  User.prototype.setAge = function (newAge) {
    this.age = newAge;
    if (newAge < 0) {
      return false;
    }

    if (newAge >= 25) {
      this.requestNewPhoto();
    }
    return this.age;
  };
}

const person = new User('John', 46);
// console.log(person);
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
