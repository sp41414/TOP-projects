function totalIntegers(array) {
  debugger;
  let total = 0;
  let firstElement = array.shift();
  if (array.length === 0) {
    return 0;
  }
  // if the first element of an array is an array,
  // then check if the array inside the array is also an array.
  // if it isn't, and is an integer, add the total by one.
  if (Array.isArray(firstElement)) {
    total += totalIntegers(firstElement);
  } else if (Number.isInteger(firstElement)) {
    total++;
  }
  return total;
}
var seven = totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]); // 7
console.log(seven);
