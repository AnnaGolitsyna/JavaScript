// input - obj
// output - arr[{}]sort(age)
const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 17,
  },
  'customer-id-3': {
    name: 'Bob',
    age: 35,
  },
};
const getCustomersList = obj => {
  const customersObj = Object.values(obj);
  const customersKeysArr = Object.keys(obj);
  return customersObj.reduce((acc, element, index) => ([...acc, { ...element, id: customersKeysArr[index] }]), [])
  .sort((a, b) =>  a.age - b.age);
};
console.log(getCustomersList(customers));
console.log(customers);