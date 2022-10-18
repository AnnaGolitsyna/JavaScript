// input obj { [{}], [{}] }
//
// output arr [name]

const rooms = {
  room1: [{ name: 'Jack' }, { name: 'Andrey' }, { name: 'Ann' }, { name: 'Vasil' }],
  room2: [{ name: 'Dan' }],
  room3: [{ name: 'Denis' }, { name: 'Max' }, { name: 'Ann' }, { name: 'Alex' }],
};

const getPeople = obj => Object.values(obj).flat().map(el => el.name);

console.log(getPeople(rooms));
console.log(rooms);
