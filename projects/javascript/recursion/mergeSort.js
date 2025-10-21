function mergeSort(array) {
  // the base case for if the array length is 1 or less, it's already sorted.
  if (array.length <= 1) return array;
  // then i'll split the array in half
  let midpoint = Math.floor(array.length / 2);
  let firstHalf = array.slice(0, midpoint);
  let secondHalf = array.slice(midpoint);
  // then using a while loop i'll recursively sort the two halves and then merge the halves
  let merged = [];
  let recursedFirst = mergeSort(firstHalf);
  let recursedSecond = mergeSort(secondHalf);
  while (recursedFirst.length > 0 && recursedSecond.length > 0) {
    // expected: takes both values from both halves and merges them from smallest to largest
    let value =
      recursedFirst[0] > recursedSecond[0]
        ? recursedSecond.shift()
        : recursedFirst.shift();
    merged.push(value);
  }
  // then the leftovers are merged aswell
  merged = merged.concat(recursedFirst, recursedSecond);
  return merged;
}
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
