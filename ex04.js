// Exercise 4: Write a function `mostFrequentChar` that takes a string and returns the character
// that appears the most times. If there is a tie, return the first character that reaches the maximum frequency.
// Example: mostFrequentChar("javascript") should return "a".

// reduce()
function mostFrequentChar(str) {
  let mostFrequentChar = "";
  let mostFrequentCharCount = 0;

  str.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    if (acc[char] > mostFrequentCharCount) {
      mostFrequentCharCount = acc[char];
      mostFrequentChar = char;
    }
    return acc;
  }, {});

  return mostFrequentChar;
}

// console.log(mostFrequentChar("javascript")); // Expected output: "a"
console.log(mostFrequentChar("vanilla")); // Expected output: "e"
