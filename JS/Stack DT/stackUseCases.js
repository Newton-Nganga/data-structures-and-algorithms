
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


//convert numbers to base 2 or base 10  
function mulBase(num, base) {
  let s = new stack();
  do {
    s.push(num);
    num = Math.floor((num /= base));
  } while (num > 0);
  let converted = "";
  while (s.length() > 0) {
    converted += s.pop();
  }
  return converted;
}

//test
let num = 32
let base = 2
var newNum = mulBase(num,base)
console.log(`${num} converted to base ${base} is ${newNum}`)
num =125
base =8
console.log(`${num} converted to base ${base} is ${newNum}`)