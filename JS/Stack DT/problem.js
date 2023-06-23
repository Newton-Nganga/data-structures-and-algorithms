//an algithm to determine whether a word is an even palindrome or not

//psudocode
//-----------
// 1.push all the characters of a string into the stack
// 2.pop out all the chars out of the stack,
// 3.compare whether the popped  out characters for a string similar to the original one

class Stack {
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

function isEvenPalindrome(word) {
  let st1 = new Stack();
  //push
  word.split().forEach((char) => st1.push(char));
  //pop
  const reversed = st1.dataStore.forEach((el) => st1.pop());
  if (word === reversed) {
    return true;
  }
  return false;
}

console.log(isEvenPalindrome("animal"));
