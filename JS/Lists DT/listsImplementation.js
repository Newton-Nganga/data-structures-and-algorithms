//Types of lists : Linked-lists,Doubly linked list,Circular-linked list
//singly linked list
// head ->[data ->next][data -> next]
//Doubly linkedlist
// head ->[prev -> data ->next][prev -> data -> next]

//singly-linked list
//methods :
//_length -retrives the number of nodes in a list
//head - assigns a node as the head of the list
//add(value) -a adds a node to the list
//searchNodeAt(position) - searches for a node at position n
//remove(position) - removes a node from a position

//Implementation of a singly-linked list pseudocode

//Add method
// 1.create a new instance of the node
// 2.declare a new variable called currentNode = head
// 3.if !nodes i.e _length = 0 then head = null
// 4.1st case:Addingthe node to an empty list
//      i. if !head || head == null : head = node 
//      ii. then _length++
// 5.2nd case:Adding a node to a none empty list
//      i. while (currentNode.next) then currentNode = currentNode.next
//      ->incase !currentNode.next : [breaks out of the loop]
//      ii. currentNode.next = node then _length++
// 6. return node


//Find Item in the list