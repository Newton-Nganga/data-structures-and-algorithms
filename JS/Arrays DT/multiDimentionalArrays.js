//2D arrays
//---------------------


//A function to create a 2d array
const create2DArray = (rows,cols)=>{
    let arr = new Array(rows)
    for(let i=0;i<rows;i++){
        arr[i]=new Array(cols);
    }
}

let myArray = create2DArray(3,4)  //creates a 3 x 4 array 
//indexes of the array created
// 00|01|02|03
// 10|11|12|13
// 20|21|22|23

console.log(myArray) // [1,2,3,4],[5,6,7,8],[9,10,11,12]