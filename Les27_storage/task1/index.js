// input => key, value
// output => {}
// create f - export
// set localStorage
// check type key/value

localStorage.setItem('name', 'Tom');
localStorage.setItem('status', true);
localStorage.setItem('order', null);
localStorage.setItem('amount', JSON.stringify([1, 2, 3]));
localStorage.setItem('age', JSON.stringify({ age: 17 }));

export const getLocalStorageData = () =>  Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;
    try {
      newValue = JSON.parse(value);
    } catch (e) {
      newValue = value;
    }
    return {...acc, [key]: newValue,};
  }, {});



console.log(getLocalStorageData());
