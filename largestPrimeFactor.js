const { isPrime } = require('./common');

const getLargestPrimeFactor = (N) => {
  let largestPrime = 2;

  for (let i = 2; i <= Math.sqrt(N); i++) {
    if (N % i === 0 && isPrime(i)) {
      largestPrime = i;
    }
  }

  return largestPrime;
};

console.log(getLargestPrimeFactor(600851475143));