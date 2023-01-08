const isPalindrome = (num) => {
  const numStr = num.toString();

  let i = 0;
  let j = numStr.length - 1;
  while (i < j) {
    if (numStr[i] !== numStr[j]) {
      return false;
    }

    i++;
    j--;
  }

  return true;
};

const getLargestProduct = () => {
  let largestPalindrome = -1;
  for (let i = 999; i >= 100; i--) {
    for (let j = 999; j >= 100; j--) {
      const multiplication = i * j;

      if (isPalindrome(multiplication)) {
        largestPalindrome = Math.max(multiplication, largestPalindrome);
      }
    }
  }

  return largestPalindrome;
};

console.log(getLargestProduct());