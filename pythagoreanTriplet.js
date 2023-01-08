const findPythagereanTripletSumsUpToN = (N) => {
  for (let a = 1; a < Math.sqrt(N); a++) {
    for (let b = a; b < Math.sqrt(N); b++) {
      const c = Math.sqrt(a * a + b * b);
      const sum = a + b + c;

      if (N % sum === 0) {
        const k = N / (a + b + c);
        return [a * k, b * k, c * k];
      }
    }
  }

  return [];
};

const [a, b, c] = findPythagereanTripletSumsUpToN(1000);
console.log(a * b * c);