// Exercise 15: Write a recursive function `findMax` that takes an array of numbers
// and returns the maximum number in the array.
// Example: findMax([3, 1, 4, 1, 5, 9]) should return 9.

function findMax(arr) {
  return arr.sort((a, b) => a - b)[arr.length - 1];
}

console.log(findMax([3, 1, 4, 1, 5, 9])); // Expected output: 9
console.log(findMax([3, 100, 4, 1, 5, 9])); // Expected output: 9
