/**
 * BINARY SEARCH IMPLEMENTATION JAVASCRIPT
 * Time complexity 0(log N)
 * First, stablish the lower and upper bounds of where the value can be.
 * Next, begin a loop in which we keep inspecting the middle value.
 * if searchValue === valueAtMiddlePoint
 *      return valueAtMiddlePoint
 * else if searchValue < valueAtMiddlePoint
 *      upperBound = midPoint - 1
 * else 
 *      lowerBound = midpoint + 1
 */
function binarySearch(orderedArray, searchValue){
    let lowerBound = 0
    let upperBound = orderedArray.length -1

    // Loop through array and inspect middle Value
    while (lowerBound <= upperBound){ 
        let midPoint = Math.floor((lowerBound + upperBound) / 2) // find middle point
        if(searchValue === orderedArray[midPoint]){
            return midPoint
        }else if(searchValue < orderedArray[midPoint]){
            upperBound = midPoint -1

        }else{
            lowerBound = midPoint +1
        }
        return -1 // if not found, return -1
    }
}
console.log(binarySearch([1,2,3,4,5,6,7,8,9,14], 14))
