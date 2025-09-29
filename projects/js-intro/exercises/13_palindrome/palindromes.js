const palindromes = function (string) {
  // this returns a lowercase string that removes all punctuation and whitespace.
  let lowercaseString = string
    .toLowerCase()
    .replace(/[^\w\s\']|_/g, "")
    .replace(/\s+/g, " ")
    .replaceAll(" ", "");
  let reversedString = lowercaseString.split("").reverse().join("");
  if (lowercaseString === reversedString) {
    return true;
  } else {
    return false;
  }
};

console.log(palindromes("Animal loots foliated detail of stool lamina."));

// Do not edit below this line
module.exports = palindromes;
