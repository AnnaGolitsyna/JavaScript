const increaser = (a, index) => {
  if (a > index) {
    return a + index;
  }
  return a;
};
console.log(increaser(3, 5));
console.log(increaser(6, 4));
