// Exercise 5: Write a function `countConsonants` that takes a string
// and returns the number of consonants in the string.
// Example: countConsonants("hello world") should return 7.

function countConsonants(str) {
  let result;
  const newStr = str.replace(/\s+/g, "");
  result = newStr.match(/[aeiouAEIOU]/gi);
  return newStr.length - result.length;
}

console.log(countConsonants("hello world")); // Expected output: 7
console.log(countConsonants("I am a student")); // Expected output:
