/*
ARRAY OPERATIONS
READ ELEMENTS 
note: return keyword is ommitted to see all examples return values in terminal
*/

function readingArrays(nums){
    // access by index 
    // Time Complexity: O(1)
    console.log(nums[3]) 
    
    // access all elements, linear access.
    // Time Complexity: O(n)
    nums.map((num, index)=>{
        console.log( `index: ${index} value:${num}`)
    })
    // another loop syntax with index
    // Time Complexity: O(n)
    for(let i=0; i<nums.length; i++){
        console.log( `index: ${i}, Value:${nums[i]}`);
    }        

}
//readingArrays([1,4,5,8,4,2])

//SEARCH ELEMENTS 

function searchElement(nums, searchValue){
    // loop through array
    // Time complexity O(n)
    for(let i=0; i<nums.length; i++){
        if(nums[i]=== searchValue){
            console.log(`the searchValue is at index: ${i}`)
        }
    }
    // Find index with findIndex function
    const foundIndex = nums.findIndex(num => num === searchValue)
    console.log(`the value searched is at ${foundIndex} index`)
    // use find method to find element greater that 7
    const greaterThan7 = nums.filter((num) => {
       return num > searchValue
    })
    console.log(`Numbers greater than 7 are:${greaterThan7}`)

    // use find method to find element greater that 7
    const numsGreaterThan7 = nums.filter( num => num > searchValue)
    console.log(`numbers greater than 7 are: ${numsGreaterThan7}`)
}
// searchElement([1,4,5,8,4,2], 2)

// INSERT ELEMENT TO ARRAY
function insertElement(nums, element){
    // push: inser at the end of array
    // time complexity O(1)
    nums.push(element)
    // unshift insert at the begining 
    // time complexity: O(n)+1
    nums.unshift(element)
    // time complexity O(1)+1
    nums.splice(5,0,element)
    return nums
}
console.log(insertElement([1,4,5,8,4,2], 2))