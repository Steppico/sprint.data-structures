class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
  insert(val) {
    if (val === this.value) {
      return this;
    } else if (val > this.value) {
      if (this.right === null) {
        this.right = new BinarySearchTree(val);
      } else {
        this.right.insert(val);
      }
    } else if (val < this.value) {
      if (this.left === null) {
        this.left = new BinarySearchTree(val);
      } else {
        this.left.insert(val);
      }
    }
    return this;
  }

  contains(val) {
    if (this.value === val) {
      return true;
    } else if (val > this.value) {
      if (this.right === null) {
        return false;
      } else {
        return this.right.contains(val);
      }
    } else if (val < this.value) {
      if (this.left === null) {
        return false;
      } else {
        return this.left.contains(val);
      }
    }
  }
}

module.exports = BinarySearchTree;
/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   Basic Requirements:         X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
