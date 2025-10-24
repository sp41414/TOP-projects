// Binary search O(log n)
function search(element, array) {
  let midpoint = Math.floor(array.length / 2);
  let middle = array[midpoint];
  if (element === middle) return "Found";
  if (middle === undefined || array === undefined) return "Not found";

  if (element < middle) {
    return search(element, array.slice(0, midpoint));
  } else {
    return search(element, array.slice(midpoint));
  }
}

let array = [0, 1, 2, 3, 4, 7, 8];
console.log(search(8, array)); // Found

// Array method O(n)
if (array.indexOf(8)) {
  console.log("Found (if condition)");
}
