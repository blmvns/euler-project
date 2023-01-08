const getSumBelowN = (a, N) => {
  const n = Math.floor((N - 1) / a);
  const sum = (n / 2) * (a * (n + 1));

  return sum;
};

const N = 1000;

const finalSum = getSumBelowN(3, N) + getSumBelowN(5, N) - getSumBelowN(15, N);
console.log(finalSum);