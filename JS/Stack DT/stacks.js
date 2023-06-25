//stack implementation using objects
class stack{
    constructor(){
        this._size = 0
        this._storage = {}
    }
    //methods
    push(data){
        //assign size/index as key and data as the value
        this._storage[this._size]=data
        this._size++
    }
    pop(){
        (this._size === 0 )&& null;

        let deletedData = this._storage[this._size - 1]
        delete this._storage[this._size - 1]

        this._size--;

        return deletedData
    }
}

//**stack implementation using array