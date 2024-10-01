// Exercise 5: Write a function `countConsonants` that takes a string
// and returns the number of consonants in the string.
// Example: countConsonants("hello world") should return 7.

function countConsonants(str) {
  const vowel = ["a", "e", "i", "o", "u"];

  const consonants = str
    .toLowerCase()
    .replace(/\s+/g, "")
    .split("")
    .filter((element1) => !vowel.includes(element1));
  return consonants.length;
}

console.log(countConsonants("hello world")); // Expected output: 7
console.log(countConsonants("I am a student")); // Expected output: 
