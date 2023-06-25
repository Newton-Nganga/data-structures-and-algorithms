class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class singlyList {
  constructor() {
    this._length = 0;
    this.head = null;
  }

  add(value) {
    let node = new Node(value),
      currentNode = this.head;

    //1st case :An empty list
    if (!currentNode) {
      this.head = node;
      this._length++;

      return node;
    }
    //2nd case : A non empty list
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
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

  removeAtPosition(position) {
    let currentNode = this.head,
      length = this._length,
      count = 0,
      message = { failure: "Failure : non-existent node in the list" },
      beforeNodeToDelete = null,
      nodeTodelete = null,
      deletedNode = null;

    //1st case : an invalid position
    if (length === 0 || position < 0 || position > length) {
      throw new Error(message.failure);
    }

    //2nd case : The first node is removed
    if(position === 1){
        this.head = currentNode.next //point to the node after head
        deletedNode = currentNode
        currentNode = null
        this._length--

        return deletedNode
    }

    //3rd case : Any other position is removed
    while(count < position){
        beforeNodeToDelete = currentNode
        nodeTodelete = currentNode.next
        count++
    }
    beforeNodeToDelete.next = nodeTodelete.next
    deletedNode = nodeTodelete
    nodeTodelete = null  //delete the node
    this._length--

    return deletedNode
  }
}
