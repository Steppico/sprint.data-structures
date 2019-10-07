class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    this.children.push(new Tree(value));
  }

  contains(value) {
    let result = false;
    const recurse = (node) => {
      if (node.value === value) {
        result = true;
      } else {
        for (let i = 0; i < node.children.length; i++) {
          recurse(node.children[i]);
        }
      }
    };

    recurse(this);
    return result;
  }

  remove(value) {
    const recurse = (node) => {
      if (node.children) {
        for (let i = 0; i < node.children.length; i++) {
          if (node.children[i].value === value) {
            return node.children.splice(i, 1);
          } else {
            recurse(node.children[i]);
          }
        }
      }
    };

    return recurse(this);
  }

  /*
+-------------------------+
| Advanced Requirements!! |
+-------------------------+

The following are part of the advanced requirements.
Do not proceed until you are done with the basic
requirements for ALL data structures in this exercise.

*/
  traverseDepthFirst(fn) {
    const recurse = (node) => {
      if (node.children.length !== 0) {
        for (let i = 0; i < node.children.length; i++) {
          recurse(node.children[i]);
        }
        fn(node);
      } else {
        fn(node);
      }
    };
    recurse(this);
  }

  traverseBreadthFirst(fn) {
    let currentlyRecursing = [];
    fn(this.value);
    const recurse = (node) => {
      if (node.children.length !== 0) {
        for (let i = 0; i < node.children.length; i++) {
          currentlyRecursing.push(node.children[i]);
        }
        currentlyRecursing.forEach((child) => fn(child.value));
        currentlyRecursing = [];
        for (let j = 0; j < node.children.length; j++) {
          recurse(node.children[j]);
        }
      }
    };
    recurse(this);
  }
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
