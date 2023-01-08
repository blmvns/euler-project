const isDivisibleByEveryNumber = (num, N) => {
  for (let i = 2; i <= N; i++) {
    if (num % i !== 0) {
      return false;
    }
  }

  return true;
};

const getSmallestMultiple = (N) => {
  let i = 2520;

  while (true) {
    if (isDivisibleByEveryNumber(i, N)) {
      return i;
    }

    i++;
  }
};

console.log(getSmallestMultiple(20));