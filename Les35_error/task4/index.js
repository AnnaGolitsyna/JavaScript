// algo
// create f parseUser
// input - string
// if parse.ok - output - result
// if err - null

export const parseUser = user => {
  try {
    const userResult = JSON.parse(user);
    return userResult;
  } catch (e) {
    return null;
  }
};
console.log(parseUser('{"name":"Tom", "age": "25"}'));
console.log(parseUser('{"name":"Bob" "age": "20"}'));
