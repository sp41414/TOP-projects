function all(array, callback) {
  if (array.length === 0) {
    return true;
  }
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      return false;
    }
  }
  return true;
}

console.log(
  all([1, 2, 4], (num) => {
    return num < 7;
  }),
);
