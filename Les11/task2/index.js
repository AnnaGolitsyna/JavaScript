// input => [{}], boolean
// output => sort[{}]

// Algo:
// if not arr => null +++
// if boolean = undefind || true => sort(a > b)
// if false => sort (b > a)

const contacts = [
  {
    name: 'Tom',
    phoneNumber: '777-77-77',
  },
  {
    name: 'Anna',
    phoneNumber: '777-77-77',
  },
  {
    name: 'Yaroslav',
    phoneNumber: '777-77-77',
  },
  {
    name: 'Bogdan',
    phoneNumber: '777-77-77',
  },
  {
    name: 'Nik',
    phoneNumber: '777-77-77',
  },
];

function sortContacts(arr, boolean) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const result = [...arr];
  
  result.sort((a, b) => {
    if (boolean === undefined || boolean === true) {
      return a.name.localeCompare(b.name);
    }
    return b.name.localeCompare(a.name);
  });
  return result;
}

console.log(sortContacts(contacts, true));
console.log(sortContacts(contacts));
console.log(sortContacts(contacts, false));
console.log(sortContacts('return', 2));
console.log(sortContacts(10, 3));
