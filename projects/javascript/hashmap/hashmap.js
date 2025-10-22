class LinkedList {
  constructor() {
    this.list = [];
  }
  append(pair) {
    this.list.push(pair);
  }
  prepend(pair) {
    this.list.unshift(pair);
  }
  size() {
    return this.list.length;
  }
  head() {
    return this.list[0];
  }
  tail() {
    return this.list[this.list.length - 1];
  }
  at(index) {
    return index in this.list ? this.list[index] : null;
  }
  pop() {
    this.list.pop();
  }
  containsKey(key) {
    return this.list.some((pair) => pair[0] === key);
  }
  findIndexByKey(key) {
    return this.list.findIndex((pair) => pair[0] === key);
  }
  removeByKey(key) {
    const index = this.findIndexByKey(key);
    if (index !== -1) {
      this.list.splice(index, 1);
    }
  }
  toString() {
    let array = this.list;
    let string = ``;
    for (let i = 0; i < array.length; i++) {
      string += ` ( ${array[i]} ) ->`;
    }
    string += " null";
    return string;
  }
}
// implementation from previous project ^^

class HashMap {
  constructor() {
    this.capacity = 16;
    this.loadFactor = 0.75;
    this.linkedLists = [];
  }

  hash(key) {
    let hash = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hash = (primeNumber * hash + key.charCodeAt(i)) % this.capacity;
    }
    return hash;
  }
}
