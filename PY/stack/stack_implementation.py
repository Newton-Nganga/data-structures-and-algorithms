#stack implementation in py
'''
stack uses LIFO algorithm (Last In  First Out)

Possible actions on stack
-------------------------
Push -> Adds an element on top of the stack
Pop ->  Removes/pops topmost element from the stack
IsEmpty -> checks if the stack is empty
IsFull -> checks if the stack is full
Peek -> gets the value of the topmost element without removing it

Working of stack structure
--------------------------
1.A pointer called TOP is used to keep track of the top element in the stack
2.When initializing the stack ,the value is set to -1 so that TOP = -1:indicating empty stack
3.Increment the TOP on pushing an element
4.Decrement the TOP on popping an element
5.Before Pushing check if IsFull
6.Before Poping check if IsEmpty -> TOP = -1
'''



#creating a stack using array 
#-----------------------------
#a function to create a stack
def create_stack():
    stack = []
    return stack

#creating an empty stack using the fun to create stack
def check_empty(stack):
    return len(stack) == 0

#Adding items into the stack
def push(stack,item):
    stack.append(item)
    print(f'pushed item : {item}')

#Removing an element from the stack
def Pop(stack):
    if(check_empty(stack)):
        return "stack is Empty"
    return stack.pop()

#Implementation
stack = create_stack() #creates an empty stack
push(stack,str(1))
push(stack,str(2))
push(stack,str(3))
push(stack,str(4))
    
print(f'popped item : {Pop(stack)}')
print(f'string after poping an element : {str(stack)}' )
