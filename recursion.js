// a function that calls itself
// call stack - when a function is invoked is placed on top. When function ends its removed from the top 
// Invoke the same function with a different input until you reach teh base case
// base case: where the recursion stops

// Recursion problem example:
function countDown(num) {
    if(num <= 0) {
        console.log("All done!")
        return
    }
    console.log(num)
    num--
    countDown(num)
}

function sumRange(num) {
    if(num === 1) return 1
    return num + sumRange(num-1)
}

// factorial example is 4! which = 4 * 3 * 2 * 1

