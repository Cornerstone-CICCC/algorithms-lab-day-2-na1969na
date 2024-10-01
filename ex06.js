// Exercise 6: Write a function `getQueryParams` that takes a URL string and returns
// an object containing the query parameters as key-value pairs.
// Example: getQueryParams("https://example.com?search=test&page=2")
// should return { search: "test", page: "2" }.

function getQueryParams(url) {
  const queryParams = { search: "", page: "" };
  const params = new URLSearchParams(new URL(url).search);
  queryParams.search = params.get("search");
  queryParams.page = params.get("page");
  return queryParams;
}

console.log(getQueryParams("https://example.com?search=test&page=2")); // Expected output: { search: "test", page: "2" }
console.log(getQueryParams("https://example.com?search=java&page=7")); // Expected output: { search: "test", page: "2" }
