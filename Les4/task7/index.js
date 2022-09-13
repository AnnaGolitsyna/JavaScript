let sum = 0;
for (let index = 0; index <= 1000; index += 1) {
  if (index % 2 === 1) {
    console.log('Found');
    sum += index;
  }
}

if (sum * 5 > 5000) {
  console.log('Bigger');
} else {
  console.log('Smaller or equal');
}
