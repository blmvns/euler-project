const { isPrime } = require('./common');

const getSumOfPrimesBelowN = (N) => {
  let sum = 2;
  for (let i = 3; i <= N; i += 2) {
    if (isPrime(i)) {
      sum += i
    }
  }

  return sum;
};

console.log(getSumOfPrimesBelowN(2000000));