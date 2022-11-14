// algo
// create user => export default
// {firstName, lastName, getter, setter}

const user = {
  firstName: 'Anna',
  lastName: 'Go',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const [firstName, lastName] = value.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  }
};

user.fullName = 'Bob Marly'; // not func => string
console.log(user.firstName);

