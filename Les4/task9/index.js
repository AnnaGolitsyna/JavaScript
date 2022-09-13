let sum = 0;
for (let index = 1; index <= 1000; index += 1) {
  sum += index;
}

const div = Math.trunc(sum / 1234);
const mod = sum % 1234;

console.log(div > mod);
