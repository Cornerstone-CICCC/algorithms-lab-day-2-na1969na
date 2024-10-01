// Exercise 10: Write a function `convertToCamelCase` that takes a string
// with words separated by spaces or underscores, and returns the string in camelCase format.
// Example: convertToCamelCase("hello_world") should return "helloWorld".

function convertToCamelCase(str) {
  const arr = str.split("_");
  arr[1] = arr[1].slice(0, 1).toUpperCase() + arr[1].slice(1);
  return arr.join("");
}

console.log(convertToCamelCase("hello_world")); // Expected output: "helloWorld"
console.log(convertToCamelCase("add_item")); // Expected output: "helloWorld"
