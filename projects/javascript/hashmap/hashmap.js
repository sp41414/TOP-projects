class Node {
  constructor(value, nextNode) {
    this.value = value ?? null;
    this.nextNode = nextNode ?? null;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head ?? null;
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

// implementation from previous project ^^

class HashMap {
  constructor(capacity, loadFactor) {
    this.capacity = capacity ?? 16;
    this.loadFactor = loadFactor ?? 0.75;
    // initialize empty buckets
    this.linkedLists = Array(this.capacity).fill(null);
  }

  hash(key) {
    let hash = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hash = (primeNumber * hash + key.charCodeAt(i)) % this.capacity;
    }
    return hash;
  }
  set(key, value) {
    let hashedKey = this.hash(key);
    // if a bucket is not empty, that means there's a linked list inside. then go through every node.
    if (this.linkedLists[hashedKey] !== null) {
      let currentNode = this.linkedLists[hashedKey].head;
      while (currentNode !== null) {
        // if the key is the same as the generated hash key, update the value.
        if (currentNode.value[0] === key) {
          currentNode.value[1] = value;
          return this.linkedLists[hashedKey];
        }
        if (currentNode.nextNode === null) {
          this.linkedLists[hashedKey].append([key, value]);
          return this.linkedLists[hashedKey];
        }
        currentNode = currentNode.nextNode;
      }
    } else {
      // if a bucket is empty, create a new linked list there.
      this.linkedLists[hashedKey] = new LinkedList();
      this.linkedLists[hashedKey].append([key, value]);
      return this.linkedLists[hashedKey];
    }
  }
  get(key) {
    // first get the index of the bucket
    let hashedKey = this.hash(key);
    // if the bucket is empty, return null
    if (this.linkedLists[hashedKey] === null) {
      return null;
    } else {
      // if it's not empty, go through the linked list and find the key
      let currentNode = this.linkedLists[hashedKey].head;
      while (currentNode !== null) {
        if (currentNode.value[0] === key) {
          return currentNode.value[1];
        }
        currentNode = currentNode.nextNode;
      }
      // if the key wasn't found, return null
      return null;
    }
  }
  has(key) {
    let hashedKey = this.hash(key);
    if (this.linkedLists[hashedKey] === null) {
      return false;
    } else {
      let currentNode = this.linkedLists[hashedKey].head;
      while (currentNode !== null) {
        if (currentNode.value[0] === key) {
          return true;
        }
        currentNode = currentNode.nextNode;
      }
      return false;
    }
  }
  remove(key) {
    let hashedKey = this.hash(key);
    if (this.linkedLists[hashedKey] === null) {
      return false;
    } else {
      // TODO: keep track of previousNode to try and re-link the list properly after removing the key
      let currentNode = this.linkedLists[hashedKey].head;
      while (currentNode !== null) {
        currentNode = currentNode.nextNode;
      }
    }
    return false;
  }
}

let hash = new HashMap();
console.log(hash.linkedLists);
hash.set("Car", "Toyota Camry");
console.log(hash.linkedLists);
