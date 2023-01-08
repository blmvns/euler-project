const getPowerDigitSum = (N) => {
  const digits = Math.floor(1 + N * Math.LN2 / Math.LN10);
  const number = new Uint8Array(digits);
  number[0] = 1;

  let order = 0;
  for (let i = 0; i < N; i++) {
      let carry = 0;

      for (let j = 0; j <= order; j++) {
          const product = 2 * number[j] + carry;

          number[j] = product % 10;
          carry = product / 10 | 0;

          if (j === order && carry > 0) {
              order++;
          }
      }
  }

  return number.reduce((p, x) => x + p, 0);
}

console.log(getPowerDigitSum(1000));