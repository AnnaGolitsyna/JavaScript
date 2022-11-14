// algo
// create event{} => export
// 1. in event =>
// { guests{name, age. email}, message, f getInvitations }
// 2. f getInvitations => output { age >= 18 }



const event = {
  guests: [
    { name: 'Anna', age: 46, email: 'a@server.com' },
    { name: 'Tom', age: 16, email: 't@server.com' },
    { name: 'Bob', age: 18, email: 'b@server.com' },
  ],
  message: 'Welcome to the party!',
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => ({ email, message: `Dear ${name}! ${this.message}`}));
  },
};

console.log(event);
console.log(event.getInvitations());
