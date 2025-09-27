const repeatString = function (string, number) {
  let result = "";
  if (number < 0) {
    return "ERROR";
  }
  for (i = 0; i < number; i++) {
    result += string;
  }
  return result;
};

console.log(repeatString("test", 4));

// Do not edit below this line
module.exports = repeatString;
