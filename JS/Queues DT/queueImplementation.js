//Queues implementation
//LIFO algorthm
class Queue {
    constructor(){
        this.items = []
    }
    enqueue(item){ this.items.push(item)}
    dequeue(){return this.items.shift()}
    isEmpty(){ this.items.length === 0 ?true:false }
    size(){return this.items.length}
    peek(){!this.isEmpty ? this.items[0] : null}
}
const myQueue = new Queue;
myQueue.enqueue(11)
myQueue.enqueue(12)
myQueue.enqueue(13)
myQueue.enqueue(14)
//the queue should now contain four items
console.log(`The first item to be served :${myQueue.peek()}`)
console.log(`Is the queue empty? :${myQueue.isEmpty()}`)
console.log(`The size of the queue is : ${myQueue.size()}`)
myQueue.dequeue()
console.log(`The size of the queue after a dequeue is : ${myQueue.size()}`)