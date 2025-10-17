function contains(object, value) {
  for (let key in object) {
    if (typeof object[key] == "object") {
      return contains(object[key], value);
    }
    if (object[key] === value) {
      return true;
    }
  }
  return false;
}
var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false
console.log(hasIt);
console.log(doesntHaveIt);
