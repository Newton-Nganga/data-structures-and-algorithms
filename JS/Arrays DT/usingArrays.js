//creating arrays
//-----------------------
let numbers = [] //creates an array of length 0
                   //numbers.length == 0

//create ussing the Array() constructor
let Numbers = new Array() //Numbers.length === 0
let fiveNumbers = new Array(1,2,3,4,5)  //fiveNumbers.length === 5
let initializeWithFiveEl = new Array(5)  //new Array(array length)

//Arrays have have multiple data type elements
const objects = [1,"Two",3.0,true,null]

//check if an object is of type array
const arrObject = [1,2,3,4,10,5,8,6]
const nums = 1
print(Array.isArray(arrObject)) //prints out true
print(Array.isArray(nums))      //prints out false


//Accessing and writing array elements
//-----------------------
const manyNums = []

for(i=0;i<100;i++){
    manyNums[i]= i+1                  // use a for loop to populate the array with 100 numbers
}

//accessing elements
//arrayName[elementIndex]
print(manyNums[55])  //prints out the 55th element of the array

manyNums.forEach(el => el+1) //for each element does something with each of the array elements
manyNums.map(el=>console.log(el)) //logs each of the elements in the array

//creating arrays from existing ones

const allNumbersArray = [...arrObject,...manyNums] //joins the elements in the arrObject to those in manyNums

allNumbersArray.push(101) //appends the el at the end of the arr
allNumbersArray.pop()//removes the last el in the arr

//putting the array elements in order

arrObject.reverse() //reverses the elements in the arr
arrObject.sort() //uses a comparison function to sort out the el

//example of a comparison function
function Compare(num1,num2){
    return num1 - num2
}

const isEven = num => num % 2 == 0; 
var someEven = allNumbersArray.some(isEven)
if(someEven){
 console.log("some numbers are even")
}else{
 console.log("sone numbers are not even")
}
console.log(allNumbersArray.indexOf(48)) //logs the index of the el


