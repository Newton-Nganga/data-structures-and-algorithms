class Node:
    # creating a node
    def __init__(self,item):
        self.item = item
        self.next = None
        self.previous = None

class DoublyLinkedList:
    
    def __init__(self):
        self._length = 0
        self.head = None
        self.tail = None
        
    def add(self,value):
        node = Node(value)
        
        if self._length is not 0:
            self.tail.next = node
            node.previous = self.tail
            self.tail = node
        else:
            self.head = node
            self.tail = node
        self._length+=1
        
        return node
    
    def searchNodeAt(self,position):
        currentNode = self.head
        length = self._length
        count= 1
        message = {"failure":"Failure : non-existant node in the list"}
        
        #first case: An invalid position
        if length is 0 or position < 0 or position > length:
            print(message["failure"])
            
        while count < position:
            currentNode = currentNode.next
            count+=1
            
        return currentNode
    
    def removeAt(self,position):
        currentNode = self.head
        length = self._length
        count = 0
        message =  {"failure": "Failure : non-existent node in the list",
        "success" : "Success : node removed"}
        beforeNodeToDelete = None
        afterNodeToDelete = None
        nodeTodelete = None
        deletedNode = None
        
        #first case: An invalid position
        if length is 0 or position < 0 or position > length:
            print(f'{message["failure"]}')
        
        #2nd case -> The head is to be removed  
        if position == 1 :
            self.head = currentNode.next
            
            #if thereis a second node to it
            if not self.head:
                self.head.previous = None
            #if there is no next node   
            else:
                self.tail = None
        
        elif position == length:
            self.tail = self.tail.previous
            self.tail.next = None
        
        else:
            while count < position:
                currentNode = currentNode.next
                count+=1
            
            beforeNodeToDelete = currentNode.previous
            nodeTodelete = currentNode
            afterNodeToDelete = currentNode.next
            
            beforeNodeToDelete.next = afterNodeToDelete
            afterNodeToDelete.previous = beforeNodeToDelete
            deletedNode = nodeTodelete
            nodeTodelete = None
            
        self._length-=1     
        return message["success"]       