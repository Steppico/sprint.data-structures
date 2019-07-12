const { ControlledArray, simpleHash } = require("./utilities");

class HashTable {
  constructor(limit = 8) {
    this.limit = limit;
    this.storage = ControlledArray(this.limit);
  }

  insert(key, value) {
    const index = simpleHash(key, this.limit);
    this.storage.set(index, value);
  }

  retrieve(key) {
    const idx = simpleHash(key, this.limit);
    if (this.storage.get(idx) === undefined) {
      return null;
    }
    return this.storage.get(idx);
  }

  remove(key) {
    let result = false;
    const idx = simpleHash(key, this.limit);
    let doesExist =
      this.storage.get(idx) === undefined ? false : this.storage.get(idx);
    this.storage.each((value, index, collection) => {
      if (doesExist === value) {
        collection.splice(index, 1);
        result = true;
      }
    });
    return result;
  }
}

module.exports = HashTable;

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
