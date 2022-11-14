// algo
// 1. create obj user - EXPORT
// {firstName, lastName, getFullName} +++
// 1.1 getFullName => firstName + lastName +++
// 1.2 setFullName => save fullName in obj

const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    const fullName = `${this.firstName} ${this.lastName}`;
    return fullName;
  },
  setFullName(fullName) {
    const [name, surname] = fullName.split(' ');
    this.firstName = name;
    this.lastName = surname;
  },
};

console.log(user.getFullName());
console.log(user.setFullName('don din'));
console.log(user);
