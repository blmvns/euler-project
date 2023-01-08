const sumSquareDifference = (N) => {
  const squaresSum = (N * (N + 1) * (2 * N + 1)) / 6;
  const sumSquared = Math.pow((N * (N + 1)) / 2, 2)

  return Math.abs(squaresSum - sumSquared);
};

console.log(sumSquareDifference(100));