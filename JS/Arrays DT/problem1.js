// Problem: Given an array and a sum k we need to print the length of the
//          longest subarray that sums up to k

// pseudocode of my solution
// 1. sort the array from smallest value to largest
// 2. add items adjacent to each other while sum < k pushing them to newArray
//     i. if sum > k
//          surpasedBy = sum - k
//          found=newArray.find(surpasedBy)
//          if found : pop it out
//          else if !found
//              loop the arry for values totaling surpasedBy
//                  if found then pop them out
//                  else add another item into the new array and repeat step i.

function longestArray(array = [3, 5, 6, 7, 8], k = 10) {
  const sortedArray = array.sort() //sorts in ascending order
  const newArray = [];
  let sum = 0;

  //use a post checks
  for(let index = 0; sum < k; index++){
    if(index === 0){
        sum = sortedArray[index]+sortedArray[index]+1 
        newArray.push(sortedArray[index],sortedArray[index+1])
    }else{
        sum += sortedArray[newArray.length] 
        newArray.push(sortedArray[newArray.length])  
    }
  }

  if(sum > k){
    const surpased = sum - k
    const found = newArray.find(surpased)
    if(!found){
       //a function to check for two or more numbers that add up to surpased

    }
    else if (found){
        //remove the item from array
    }
    
    return newArray
  }
  sum === k && newArray
}

// longestArray([],10)

function findLongestSubarray(array, k) {
  array.sort((a, b) => a - b);  // Sort the array in ascending order
  let maxLength = 0;
  let currentLength = 0;
  let start = 0;
  let end = 0;
  let currentSum = 0;

  for (let i = 0; i < array.length; i++) {
      currentSum += array[i];
      currentLength += 1;

      if (currentSum === k && currentLength > maxLength) {
          maxLength = currentLength;
          start = i - currentLength + 1;
          end = i;
      }

      while (currentSum > k) {
          currentSum -= array[start];
          start += 1;
          currentLength -= 1;
      }
  }

  return array.slice(start, end + 1);  // Return the longest subarray
}

// Usage example
const array = [3, 4, 2, 7, 1, 9, 8];
const k = 15;
const result = findLongestSubarray(array, k);
console.log(result);
