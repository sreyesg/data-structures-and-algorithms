/*
 ORDERED ARRAY OPERATIONS
 INSERT VALUE IN AN ORDERED ARRAY
 SEARCH VALUE IN AN ORDERED ARRAY 
  
 */
// INSERTION
// 1. linear search, insert value
// time complexity: O(n+2)

function insertValue (orderedArray, insertValue){
    for(let i=0; i < orderedArray.length; i++){
        if(orderedArray[i] > insertValue){
            orderedArray.splice(i,0,insertValue)
            return orderedArray
        }
    }
    orderedArray.push(insertValue)
    return orderedArray
}

console.log(insertValue([1,29,50,56,84], 90))

// 2. SEARCH VALUE
// Time complexity O(n)
function searchValue(orderedArray, searchValue){
    for(let i=0; i<orderedArray.length; i++){
        if(orderedArray[i] === searchValue){
            return i; // exact match found
        }else if(orderedArray[i] > searchValue){
            return `The value: ${searchValue} is not in this array`
        }
    }
    return `The value: ${searchValue} is not in this array. Array's last index: ${orderedArray.length}`
};
console.log(searchValue([1,29,50,56,84], 90))