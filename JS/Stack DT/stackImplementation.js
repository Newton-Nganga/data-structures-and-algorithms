//stack implementation
//stack uses the LIFO algorithm
//methods in stack ->
// isEmpty,isFull,pop,push,peek,claer

function stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.clear = clear;
  this.length = length;
}
const push=(element)=>this.dataStore(this.top ++) = element
const pop=()=>this.dataStore(--this.top)
const peek =()=>this.dataStore(this.top-1)
const clear=()=> this.top = 0
const length = ()=>this.top


//testing the stack
let s1 = new stack()
s1.push("David")
s1.push("Raymond")
s1.push("Brian")
s1.push("Antony")
console.log(`The stack length is ${s1.length()}`)
const popped = s1.pop()
console.log(`The popped element is ${popped}`)
s1.push("cynthia")
console.log(s1.peek())
s1.clear()
console.log(`The stack length after clearing is ${s1.length}`)


