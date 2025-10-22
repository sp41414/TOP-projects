class LinkedList {
  constructor() {
    this.list = [];
  }
  append(value) {
    this.list.push(value);
  }
  prepend(value) {
    this.list.unshift(value);
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
  contains(value) {
    return this.list.includes(value);
  }
  find(value) {
    const foundValue = this.list.indexOf(value);
    return foundValue !== -1 ? foundValue : null;
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

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("rabbit");
console.log(list.toString());
console.log(list.size());
console.log(list.head());
console.log(list.tail());
console.log(list.at(4));
console.log(list.contains("rabbit"));
console.log(list.find("dog"));

// unused class
/*
class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
*/
