function Node(value) {
  this.next = null;
  this.value = value;
}

class LinkedList {
  constructor(headValue) {
    if (headValue !== undefined) {
      this.head = new Node(headValue);
      this.tail = this.head;
    }
  }

  appendToTail(value) {
    if (this.head === undefined) {
      this.head = new Node(value);
      this.tail = this.head;
    } else {
      this.tail.next = new Node(value);
      this.tail = this.tail.next;
    }
    return this.tail;
  }

  removeHead() {
    if (this.head !== undefined) {
      const oldHead = this.head;
      this.head = this.head.next;
      return oldHead;
    }
  }

  findNode(value) {
    let result = null;
    const recurse = (node) => {
      if (value === node.value) {
        return (result = node);
      } else if (node.next === null) {
        return;
      }
      recurse(node.next);
    };
    recurse(this.head);
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

  forEach(callback) {}

  print() {}

  insertHead(value) {}

  insertAfter(refNode, value) {}

  removeAfter(refNode) {}
}

module.exports = LinkedList;

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   Basic Requirements:         X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
