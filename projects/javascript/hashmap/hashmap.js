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
