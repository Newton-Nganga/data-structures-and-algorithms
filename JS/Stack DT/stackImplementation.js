//stack implementation
//stack uses the LIFO algorithm
//methods in stack ->
// isEmpty,isFull,pop,push,peek,claer

class stack {
  constructor() {
    this.dataStore = [];
  }
  //push an element onto the  stack
  push(element) {
    this.dataStore.push(element);
  }
  //pop an element from the stack
  pop() {
    if (this.dataStore.length === 0) {
      return "underflow";
    }
    return this.dataStore.pop();
  }
  //get the top element of the stack
  peek() {
    if (this.dataStore.length === 0) {
      return "No items in the stack";
    }
    return this.dataStore[this.dataStore.length - 1];
  }
  isEmpty() {
    if (this.dataStore.length === 0) {
      return true;
    }
    return false;
  }
  printStack() {
    let str = "";
    for (let n = 0; n < this.dataStore.length; n++) {
      str += this.dataStore[n] + "";
    }
    return str.trim();
  }
  clear() {
    if (this.dataStore.length === 0) {
      return "The stack is clear";
    }
    this.dataStore.length = 0;
  }
}

//testing the stack
let s1 = new stack();
s1.push("David");
s1.push("Raymond");
s1.push("Brian");
s1.push("Antony");
console.log(`The stack length is ${s1.length()}`);
const popped = s1.pop();
console.log(`The popped element is ${popped}`);
s1.push("cynthia");
console.log(s1.peek());
s1.clear();
console.log(`The stack length after clearing is ${s1.length}`);
