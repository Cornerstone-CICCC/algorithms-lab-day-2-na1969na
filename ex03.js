// Exercise 3: Write a function `findMissingNumber` that takes an array of integers from 1 to `n`
// with one number missing and returns the missing number.
// Example: findMissingNumber([1, 2, 4, 5]) should return 3.

// sort()
function findMissingNumber(arr) {
  const newArr = arr.sort((a, b) => a - b); // 昇順にソート
  let missingNumber = null;

  for (let i = 0; i < newArr.length - 1; i++) {
    if (newArr[i + 1] - newArr[i] !== 1) {
      missingNumber = newArr[i] + 1;
      break;
    }
  }

  return missingNumber;ï
}
console.log(findMissingNumber([1, 2, 4, 5])); // Expected output: 3
console.log(findMissingNumber([1, 3, 4, 5])); // Expected output: 2
