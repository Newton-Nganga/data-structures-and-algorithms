class Node {
  constructor(value) {
    this.data = value;
    this.previous = null;
    this.next = null;
  }
}
class DoublyList {
  constructor() {
    this._length = 0;
    this.head = null;
    this.tail = null;
  }

  add(value) {
    let node = new Node(value);

    if (this._length) {
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    this._length++;

    return node;
  }

  searchNodeAt(position) {
    let currentNode = this.head,
      length = this._length,
      count = 1,
      message = { failure: "Failure : non-existent node in the list" };

    //1st case an invalid position
    if (length === 0 || position < 0 || position > length) {
      throw new Error(message.failure);
    }

    //2nd case: a valid position
    while (count < position) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }
  removeAt(position) {
    let currentNode = this.head,
      length = this._length,
      count = 0,
      message = {
        failure: "Failure : non-existent node in the list",
        success: "Success : node removed",
      },
      beforeNodeToDelete = null,
      afterNodeToDelete = null,
      nodeTodelete = null,
      deletedNode = null;

    //1st case : an invalid position
    if (length === 0 || position < 0 || position > length) {
      throw new Error(message.failure);
    }

    //2nd case : the first node is removed
    if (position === 1) {
      this.head = currentNode.next;
      //2nd case  there is a second node next to it
      if (!this.head) {
        this.head.previous = null;
      }
      //2nd case there is no second node
      else {
        this.tail = null;
      }
    }

    //3rd case : the last node is removed
    else if (position === length) {
      this.tail = this.tail.previous;
      this.tail.next = null;
    }

    //4th case: a middle node is removed
    else {
      while (count < position) {
        currentNode = currentNode.next;
        count++;
      }
      beforeNodeToDelete = currentNode.previous;
      nodeTodelete = currentNode;
      afterNodeToDelete = currentNode.next;

      beforeNodeToDelete.next = afterNodeToDelete;
      afterNodeToDelete.previous = beforeNodeToDelete;
      deletedNode = nodeTodelete;
      nodeTodelete = null;
    }
    this._length--;

    return message.success;
  }
}
