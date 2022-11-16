// algo
// create class User, UserRepository
// 1. User => constr input - id, name, sessionId
// modification closed => getter +, setter - no
// 2. UserRepository =>
// users => input arr[{User}]
// modification closed => getter +, setter - no
// stop mutation => Object.freeze

/* eslint-disable max-classes-per-file */

class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get name() {
    return this._name;
  }

  get id() {
    return this._id;
  }

  get sessionId() {
    return this._sessionId;
  }
}

class UserRepository {
  constructor(users) {
    this._users = users;
    Object.freeze(this);
  }

  get users() {
    return Object.freeze(this._users);
  }

  getUserNames() {
    return this.users.map(el => el.name);
  }

  getUserIds() {
    return this.users.map(el => el.id);
  }

  getUserNameById(id) {
    const nameUs = this.users.find(el => el.id === id);
    return nameUs.name;
  }
}

// // examples
// const user = new User('1', 'Tom', 'session-id');
// const user2 = new User('2', 'Anna', 'session-id');

// // получить свойства можем
// console.log(user.id); // ===> '1'
// console.log(user.name); // ===> 'Tom'
// console.log(user.sessionId); // ===> 'session-id'

// // console.log(user);

// // но изменить эти свойства нельзя
// user.name = 'Bob'; // пытаемся изменить старое значение
// console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует
// user.id = '20'; // пытаемся изменить старое значение
// console.log(user.id); // ===> '1' - но изменение проигнорировано, так как setter отсутствует
// console.log(user);

const usersTest = new UserRepository([new User('2', 'Anna', '15'), new User('12', 'John', '133')]);
console.log(usersTest);
console.log(usersTest.getUserNames());
console.log(usersTest.getUserIds());
console.log(usersTest.getUserNameById('12'));
