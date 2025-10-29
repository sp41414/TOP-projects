export function capitalize(inputString) {
  let uppercaseString = "";
  for (let i = 0; i < inputString.length; i++) {
    uppercaseString += inputString[i].toUpperCase();
  }
  return uppercaseString;
}

export function reverseString(inputString) {
  let reversedString = "";
  for (let i = inputString.length - 1; i > -1; i--) {
    reversedString += inputString[i];
  }
  return reversedString;
}

export class Calculator {
  constructor() {}
  add(num1, num2) {
    return num1 + num2;
  }
  subtract(num1, num2) {
    return num1 - num2;
  }
  divide(num1, num2) {
    if (num2 === 0) {
      throw new Error("Cannot divide by zero");
    }
    return num1 / num2;
  }
  multiply(num1, num2) {
    return num1 * num2;
  }
}

export function caesarCipher(inputString, shiftFactor) {
  if (shiftFactor === 0) return inputString; // no shift, return original
  let cipherString = "";

  for (let i = 0; i < inputString.length; i++) {
    let alphabetChar = inputString[i];
    let charCode = inputString.charCodeAt(i);
    // only shift uppercase errors, using character codes in ASCII, or unicode i think same thing (for this)
    // if its not in the alphabet (e.g. a space, ! or , or . etc.) it'll just append it normally
    // if it is, a capital or a lowercase, shift it
    if (alphabetChar >= "A" && alphabetChar <= "Z") {
      charCode += shiftFactor;
      while (charCode > "Z".charCodeAt(0)) charCode -= 26; // shifts it by wrapping around past 'Z'
      while (charCode < "A".charCodeAt(0)) charCode += 26; // wrapping around below 'A'
    } else if (alphabetChar >= "a" && alphabetChar <= "z") {
      charCode += shiftFactor;
      while (charCode > "z".charCodeAt(0)) charCode -= 26; // same for lowercase as uppercase ^
      while (charCode < "a".charCodeAt(0)) charCode += 26;
    }
    cipherString += String.fromCharCode(charCode);
  }
  return cipherString;
}

export function analyzeArray(array) {
  // calculate average
  let average = 0;
  array.forEach((element) => {
    average += element;
  });
  average /= array.length;

  // calculate min
  let currentMin = array[0];
  array.forEach((element) => {
    if (element <= currentMin) {
      currentMin = element;
    }
  });

  // calculate max
  let currentMax = array[0];
  array.forEach((element) => {
    if (element >= currentMax) {
      currentMax = element;
    }
  });

  // calculate length
  let length = array.length;

  return {
    average: average,
    min: currentMin,
    max: currentMax,
    length: length,
  };
}

