class Queue{
    constructor(){
        this._oldestIndex = 0
        this._newestIndex = 0
        this._storage = {}
    }
    size(){
        return this._newestIndex - this._oldestIndex
    }
    enqueue(data){
       this._storage[this._newestIndex] = data
       this._newestIndex++
    }
    dequeue(){
        //if empty return null
        (this._oldestIndex === this._newestIndex) && null;

        let deletedData = this._storage[this._oldestIndex]
        delete this._storage[this._oldestIndex]

        this._oldestIndex++

        return deletedData
    }
}