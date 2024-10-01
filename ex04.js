// Exercise 4: Write a function `mostFrequentChar` that takes a string and returns the character
// that appears the most times. If there is a tie, return the first character that reaches the maximum frequency.
// Example: mostFrequentChar("javascript") should return "a".

// reduce()
function mostFrequentChar(str) {
  const letterCount = str.split("").reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(letterCount).reduce((maxChar, char) => {
    return letterCount[char] > letterCount[maxChar] ? char : maxChar;
  });
}

console.log(mostFrequentChar("javascript")); // Expected output: "a"
console.log(mostFrequentChar("seventeen")); // Expected output: "e"
