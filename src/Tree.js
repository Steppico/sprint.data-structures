class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    const node = new Tree(value);
    this.children.push(node);
  }

  contains(value) {
    let result = false;
    const recursion = (node) => {
      if (node.value === value) {
        result = true;
      }
      if (node.children.length >= 0) {
        for (let child in node.children) {
          recursion(node.children[child]);
        }
      }
    };
    recursion(this);
    return result;
  }

  /*
+-------------------------+
| Advanced Requirements!! |
+-------------------------+

The following are part of the advanced requirements.
Do not proceed until you are done with the basic
requirements for ALL data structures in this exercise.

*/
  traverseDepthFirst(fn) {}

  traverseBreadthFirst(fn) {}
}

module.exports = Tree;

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
