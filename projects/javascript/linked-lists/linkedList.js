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
  head() {
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
