const removeFromArray = function (array, ...args) {
  let newArray = [];
  // alright so apparently in the solution i could just use array.forEach(element => {
  //
  // });
  let item;
  for (let i = 0; i < array.length; i++) {
    item = array[i];
    if (!args.includes(item)) {
      newArray.push(item);
    }
  }

  return newArray;
};

console.log(removeFromArray([1, 2, 2, "tootoo"], 2, "tootoo"));
console.log(removeFromArray([1, 2, 2, 4], 2));

// Do not edit below this line
module.exports = removeFromArray;
