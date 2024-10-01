// Exercise 3: Write a function `findMissingNumber` that takes an array of integers from 1 to `n`
// with one number missing and returns the missing number.
// Example: findMissingNumber([1, 2, 4, 5]) should return 3.

// sort()
function findMissingNumber(arr) {
  const result = -1;

  arr.sort((a, b) => a - b);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + 1) {
      return arr[i] - 1;
    }
  }
  return result;
}
console.log(findMissingNumber([1, 2, 4, 5])); // Expected output: 3
console.log(findMissingNumber([1, 3, 4, 5])); // Expected output: 2
