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
    if (this.head) {
      const recurse = (head) => {
        if (head.next === null) {
          this.tail = new Node(value);
          head.next = this.tail;
        } else {
          recurse(head.next);
        }
        return this.tail;
      };
      return recurse(this.head);
    } else {
      this.head = new Node(value);
      this.tail = this.head;
      return this.head;
    }
  }

  removeHead() {
    const oldHead = this.head;
    this.head = this.head.next;
    return oldHead;
  }

  findNode(value) {
    const recurse = (node) => {
      if (node.value === value) {
        return node;
      } else if (node.next === null) {
        return null;
      } else {
        return recurse(node.next);
      }
    };

    return recurse(this.head);
  }
  /*
+-------------------------+
| Advanced Requirements!! |
+-------------------------+

The following are part of the advanced requirements.
Do not proceed until you are done with the basic
requirements for ALL data structures in this exercise.
*/

  forEach(callback) {
    const recurse = (node) => {
      if (node === null) {
        return;
      } else {
        callback(node.value);
        return recurse(node.next);
      }
    };
    return recurse(this.head);
  }

  print() {
    let result = "";
    const recurse = (node) => {
      if (node.next === null) {
        result += node.value;
      } else {
        result += node.value + ", ";
        return recurse(node.next);
      }
    };
    recurse(this.head);
    return result;
  }

  insertHead(value) {
    const previousHead = this.head;
    this.head = new Node(value);
    this.head.next = previousHead;
    return this.head;
  }

  insertAfter(refNode, value) {
    const recurse = (node) => {
      if (node === refNode) {
        const previousNext = node.next;
        node.next = new Node(value);
        node.next.next = previousNext;
        return node;
      } else {
        return recurse(node.next);
      }
    };
    return recurse(this.head);
  }

  removeAfter(refNode) {
    if (!refNode) return;
    const recurse = (node) => {
      if (node === refNode) {
        node.next = node.next.next;
        return node;
      } else {
        return recurse(node.next);
      }
    };
    return recurse(this.head);
  }
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
