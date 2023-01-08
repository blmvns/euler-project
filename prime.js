const { isPrime } = require('./common');

const getNthPrime = (N) => {
  if (N <= 2) {
    return N + 1;
  } 

  let count = 2;
  let i = 3;

  while (count < N) {
    if (isPrime(i)) {
      count++;
    }

    i += 2;
  }

  return i;
};

console.log(getNthPrime(10001));