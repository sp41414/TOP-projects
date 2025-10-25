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
  insert(root, key) {
    if (root === null) return new Node(key);
    if (root.data === key) return root; // dont insert duplicates
    root.data > key
      ? (root.left = this.insert(root.left, key))
      : (root.right = this.insert(root.right, key));

    return root;
  }
  delete(root, key) {
    if (root === null) return root;
    if (key > root.data) {
      root.right = this.delete(root.right, key);
    } else if (key < root.data) {
      root.left = this.delete(root.left, key);
    } else {
      if (root.left === null) {
        return root.right;
      } else if (root.right === null) {
        return root.left;
      }

      const successor = (root) => {
        root = root.right;
        while (root !== null && root.left !== null) {
          root = root.left;
        }
        return root;
      };

      root.data = successor.data;
      root.right = this.delete(root.right, root.data);
    }
    return root;
  }
  find(key, node = this.root) {
    if (node === null) return;
    if (node.data === key) return [node.data, node.left, node.right];

    let resultRight = this.find(key, node.right);
    if (resultRight) return resultRight;
    let resultLeft = this.find(key, node.left);
    if (resultLeft) return resultLeft;
  }
  prettyPrint(node = this.root, prefix = "", isLeft = true) {
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
console.log("Original tree:");
tree.prettyPrint();
console.log("Inserted 69 tree:");
tree.insert(tree.root, 69);
tree.insert(tree.root, 69); // duplicate, doesnt get added.
tree.prettyPrint();
console.log("Removed 69 tree:");
tree.delete(tree.root, 69);
tree.prettyPrint();
console.log("Find 324:");
console.log(tree.find(324));
console.log("Find 5943058: ");
console.log(tree.find(5943058));
