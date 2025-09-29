// not the best algorithm I made here but it works...?
const fibonacci = function (sequence) {
  if (sequence < 0) {
    return "OOPS";
  } else if (sequence === 0) {
    return 0;
  } else if (sequence === "0") {
    return 0;
  }
  let array = [1, 1];
  for (i = 0; i <= sequence; i++) {
    array.push(array[i] + array[i + 1]);
  }
  return array[sequence - 1];
};

console.log(fibonacci(-6));

// Do not edit below this line
module.exports = fibonacci;
