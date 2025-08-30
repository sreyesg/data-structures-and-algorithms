/*
ARRAY OPERATIONS
READ ELEMENTS 
note: return keyword is ommitted to see all examples return values in terminal
*/

function readingArrays(nums){
    console.log(nums[3]) // access by index
    // access all elements, linear access. For N elements, N steps. 
    nums.map((num, index)=>{
        console.log( `index: ${index} value:${num}`)
    })
    // another loop syntax with index
    for(let i=0; i<nums.length; i++){
        console.log( `index: ${i}, Value:${nums[i]}`);
    }        

}

readingArrays([1,4,5,8,4,2])