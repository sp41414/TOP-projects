function productOfArray(array) {
  if (array.length === 0) return 0;

  let product = 1;
  array.forEach((element) => {
    product *= element;
  });
  return product;
}

console.log(productOfArray([1, 2, 3]));
