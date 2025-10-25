class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    this.array = this.sortArray(array);
    this.root = this.buildTree(this.array);
  }
  sortArray(array) {
    if (array.length <= 1) return array;
    let midpoint = Math.floor(array.length / 2);
    let firstHalf = array.slice(0, midpoint);
    let secondHalf = array.slice(midpoint);
    let merged = [];
    let recursedFirst = this.sortArray(firstHalf);
    let recursedSecond = this.sortArray(secondHalf);
    while (recursedFirst.length > 0 && recursedSecond.length > 0) {
      // same merge sort but with duplicates filter
      if (recursedFirst[0] === recursedSecond[0]) {
        let value = recursedFirst.shift();
        recursedSecond.shift();
        merged.push(value);
        continue;
      }
      let value =
        recursedFirst[0] > recursedSecond[0]
          ? recursedSecond.shift()
          : recursedFirst.shift();
      merged.push(value);
    }
    merged = merged.concat(recursedFirst, recursedSecond);
    return merged;
  }
  buildTreeRec(array, start, end) {
    if (start > end) return null;
    let middle = start + Math.floor((end - start) / 2);
    let node = new Node(array[middle]);
    node.left = this.buildTreeRec(array, start, middle - 1);
    node.right = this.buildTreeRec(array, middle + 1, end);
    return node;
  }
  buildTree(array) {
    return this.buildTreeRec(array, 0, array.length - 1);
  }
  prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }
}
let tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
tree.prettyPrint(tree.root);
