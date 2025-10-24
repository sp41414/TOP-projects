class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  append(value) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      let last = this.head;
      while (last.nextNode !== null) {
        last = last.nextNode;
      }
      last.nextNode = node;
    }
    this.length += 1;
    return node;
  }
  prepend(value) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      node.nextNode = this.head;
      this.head = node;
    }
    this.length += 1;
    return node;
  }
  size() {
    return this.length;
  }
  getHead() {
    return this.head.value;
  }
  // could track tail using this.tail() but this is also fine for now...
  getTail() {
    let currentNode = this.head;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    return currentNode.value;
  }
  at(index) {
    let currentIndex = 0; // could be 1 but im gonna stick with 0
    let currentNode = this.head;
    while (currentNode.nextNode !== null) {
      if (currentIndex === index) {
        return currentNode.value;
      }
      currentIndex++;
      currentNode = currentNode.nextNode;
    }
  }
  pop() {
    let currentNode = this.head;
    if (currentNode === null) {
      return;
    }
    if (currentNode.nextNode === null) {
      this.head = null;
      this.length--;
      return;
    }
    while (currentNode.nextNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = null;
    this.length--;
  }
  contains(value) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }
  find(value) {
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return currentIndex;
      }
      currentIndex++;
      currentNode = currentNode.nextNode;
    }
    return null;
  }
  deleteAt(position) {
    let currentNode = this.head;
    if (position === 1) {
      this.head = this.head.nextNode;
      return this.head;
    }
    let prev = null;
    for (let i = 0; i < position; i++) {
      prev = currentNode;
      currentNode = currentNode.nextNode;
    }
    prev.nextNode = currentNode.nextNode;

    return this.head;
  }
  toString() {
    let currentNode = this.head;
    let string = "";
    while (currentNode !== null) {
      string += currentNode.value + " -> ";
      currentNode = currentNode.nextNode;
    }
    string += null;
    return string;
  }
}
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString());
console.log(list.size());
list.pop();
console.log(list.toString());
console.log(list.getHead());
console.log(list.getTail());
console.log(list.at(2));
let index = list.find("parrot");
console.log(index);
list.deleteAt(index);
console.log(list.toString());

// Output:
/*
dog -> cat -> parrot -> hamster -> snake -> turtle -> null
6
dog -> cat -> parrot -> hamster -> snake -> null
dog
snake
parrot
*/
