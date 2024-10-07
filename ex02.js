// Exercise 2: Write a function `arrayDifference` that takes two arrays and returns an array
// containing the elements that are in the first array but not in the second array.
// Example: arrayDifference([1, 2, 3], [2, 3, 4]) should return [1].

// filter()
// includes()
function arrayDifference(array1, array2) {
  return array1.filter((num) => !array2.includes(num))
}

console.log(arrayDifference([1, 2, 3], [2, 3, 4])); // Expected output: [1]
