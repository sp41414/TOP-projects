class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  // this will first sort the array using merge sort while also removing duplicates
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
  // then it'll set the root node as the middle of the array, and each child node (left and right) is recursively
  // set
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
  // this will create a new node and traverse the tree until it finds a spot using a comparison
  // if there is no root, the root will become the new node
  // this will not insert if there already exists a same value node
  insert(root, key) {
    if (root === null) return new Node(key);
    if (root.data === key) return root; // dont insert duplicates
    root.data > key
      ? (root.left = this.insert(root.left, key))
      : (root.right = this.insert(root.right, key));

    return root;
  }
  // this function will traverse the left and right from the root until it finds the node with the same data as key
  // then it'll delete it by 1. checking its children, then 2. changing the pointers for nodes so its deleted.
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
  // this'll go on BOTH left and right of the tree until it finds the node, which it'll return its value, and its left node and right node.
  find(key, node = this.root) {
    if (node === null) return;
    if (node.data === key) return [node.data, node.left, node.right];

    let resultRight = this.find(key, node.right);
    if (resultRight) return resultRight;
    let resultLeft = this.find(key, node.left);
    if (resultLeft) return resultLeft;
  }
  // uses a queue system to go through every node and use the callback function on the node
  levelOrderForEach(callback) {
    if (typeof callback !== "function")
      throw new Error("A callback function is required");
    if (this.root === null) return;
    let queue = [];

    queue.push(this.root);

    while (queue.length > 0) {
      for (let i = 0; i < queue.length; i++) {
        let node = queue.shift();
        callback(node);
        if (node.left !== null) {
          queue.push(node.left);
        }
        if (node.right !== null) {
          queue.push(node.right);
        }
      }
    }
  }
  // each of these 3 functions use the callback in a different point depending on the order.
  inOrderForEach(callback, node = this.root) {
    if (typeof callback !== "function")
      throw new Error("A callback function is required");
    if (node === null) return;
    this.inOrderForEach(callback, node.left);
    callback(node);
    this.inOrderForEach(callback, node.right);
  }
  preOrderForEach(callback, node = this.root) {
    if (typeof callback !== "function")
      throw new Error("A callback function is required");
    if (node === null) return;
    callback(node);
    this.preOrderForEach(callback, node.left);
    this.preOrderForEach(callback, node.right);
  }
  postOrderForEach(callback, node = this.root) {
    if (typeof callback !== "function")
      throw new Error("A callback function is required");
    if (node === null) return;
    this.postOrderForEach(callback, node.left);
    this.postOrderForEach(callback, node.right);
    callback(node);
  }
  // height is from the value node to the deepest node
  height(value, node = this.root) {
    if (node === null) {
      return 0;
    }
    if (node.data === value) {
      return (function getHeight(node) {
        if (node === null) return 0;
        let lHeight = getHeight(node.left);
        let rHeight = getHeight(node.right);

        return 1 + Math.max(lHeight, rHeight);
      })(node);
    }
    if (value < node.data) {
      return this.height(value, node.left);
    } else {
      return this.height(value, node.right);
    }
  }
  // depth is from the root to the value node
  depth(value, node = this.root, currentDepth = 0) {
    if (node === null) {
      return 0;
    }
    if (node.data === value) {
      return currentDepth;
    }
    if (value < node.data) {
      return this.depth(value, node.left, currentDepth + 1);
    } else {
      return this.depth(value, node.right, currentDepth + 1);
    }
  }
  isBalanced(node = this.root) {
    if (node === null) {
      return true;
    }
    let lHeight = (function height(node) {
      if (node === null) return 0;
      return 1 + Math.max(height(node.left), height(node.right));
    })(node.left);
    let rHeight = (function height(node) {
      if (node === null) return 0;
      return 1 + Math.max(height(node.left), height(node.right));
    })(node.right);

    if (lHeight > rHeight + 1 || rHeight > lHeight + 1) return false;

    return this.isBalanced(node.left) && this.isBalanced(node.right);
  }
  prettyPrint(node = this.root, prefix = "", isLeft = true) {
    if (node === null) {
      return true;
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

let tree = new Tree([...Array(100).keys()]);
console.log("Is balanced: ", tree.isBalanced());
console.log("Elements (pre) ");
tree.preOrderForEach((element) => {
  console.log(element.data);
});
console.log("Elements (post) ");
tree.postOrderForEach((element) => {
  console.log(element.data);
});
console.log("Elements (in) ");
tree.inOrderForEach((element) => {
  console.log(element.data);
});

tree.insert(tree.root, 324);
tree.insert(tree.root, 114);
tree.insert(tree.root, 5831);
console.log("Is balanced (with numbers > 100): ", tree.isBalanced());
