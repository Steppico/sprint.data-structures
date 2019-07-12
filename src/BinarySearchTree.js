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
  traverseDepthFirstInOrder(callback) {
    const recursion = (node) => {
      if (node.left !== null) {
        recursion(node.left);
      } else if (node.left === null) {
        callback(node);
        if (node.right === null) {
          return;
        } else {
          return recursion(node.right);
        }
      }
      if (node.right !== null) {
        callback(node);
        recursion(node.right);
      } else {
        callback(node);
      }
    };
    recursion(this);
  }
}

module.exports = BinarySearchTree;
/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                                  X
|X   Basic Requirements:            X
|X   What is the time complexity    X
|X   of the above functions?        X
|X                                  X
|X   insert method, O(log n)        X
|X   contains, same as insert       X
|X   traverseDepthFirstInOrder, O(n)X
|X                                  X
|X                                  X
|X                                  X
|X                                  X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
