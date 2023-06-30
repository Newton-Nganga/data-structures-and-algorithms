"""
Problem: Given an array and a sum k we need to print the length of the
         longest subarray that sums up to k
         
pseudocode of my solution
1. sort the array from smallest value to largest
2. add items adjacent to each other while sum < k pushing them to newArray
    i. if sum > k 
         surpasedBy = sum - k
         found=newArray.find(surpasedBy)
         if found : pop it out
         else if !found
             loop the arry for values totaling surpasedBy
                 if found then pop them out 
                 else add another item into the new array and repeat step i.

"""

def find_longest_subarray(array, k):
    array.sort()  # Sort the array in ascending order
    max_length = 0
    current_length = 0
    start = 0
    end = 0
    current_sum = 0

    for i in range(len(array)):
        current_sum += array[i]
        current_length += 1

        if current_sum == k and current_length > max_length:
            max_length = current_length
            start = i - current_length + 1
            end = i

        while current_sum > k:
            current_sum -= array[start]
            start += 1
            current_length -= 1

    return array[start:end+1]  # Return the longest subarray

# Usage example
array = [3, 4, 2, 7, 1, 9, 8]
k = 15
result = find_longest_subarray(array, k)
print(result)

   
    


