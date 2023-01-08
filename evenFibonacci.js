const getEvenFibonacci = (N) => {
  let prev = 0;
  let cur = 1;

  let sum = 0;

  while (cur < N) {
    const next = prev + cur;

    prev = cur;
    cur = next;

    if (cur % 2 === 0) {
      sum += cur;
    }
  }

  return sum;
};

console.log(getEvenFibonacci(4000000));