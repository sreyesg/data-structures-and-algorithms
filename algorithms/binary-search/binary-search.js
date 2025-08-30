/*
Challenge: Find the Peak Element
Given an array of integers "nums" where a peak element is an element that is strictly greater than its neighbors.
Find the index of any one peak element using binary search.
Input: nums = [1, 2, 1, 3, 5, 6, 4]

*/
// Pseudocode
// define lower & upper bound
// find mid-index
//compare against search value
//continue until find search value

function findPeakElement(nums, searchValue){
    let lowerBound = nums[0] 
    let upperBound = nums.length -1
    let midIndex = Math.floor(nums.length/2)
    console.log(lowerBound,upperBound,midIndex)
    while (lowerBound < upperBound){
        if(nums[midIndex]=searchValue){
            return `the value is at ${midIndex}`
        }else if(nums[midIndex] < searchValue){
            lowerBound = midIndex
        }else {upperBound=midIndex}

    }

}
findPeakElement([1, 2, 1, 3, 5, 6, 4], 2)