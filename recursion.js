// a function that calls itself
// call stack - when a function is invoked is placed on top. When function ends its removed from the top 
// Invoke the same function with a different input until you reach teh base case
// base case: where the recursion stops - recursions always need a "return"



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

// Iteratively example:
function factorial(num) {
    let total = 1
    for(let i = num; i > 1; i++){
        total *= i
    }
    return total
}

// Recursively example:
function factorial(num) {
    if(num === 1) return 1
    return num * factorial(num - 1)
}

// Recursion helper methods
function collectOddValues(arr) {
    let result = []

    function helper(helperInput) {
        if(helperInput.length === 0) {
            return
        }
        if(helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }
    helper(arr)
    return result
}

// Pure Recursion
function collectOddValues(arr) {
    let newArr = []
    if(arr.length === 0) {
        return newArr
    }
    if(arr[0] % 2 !== 0) {
        newArr.push(arr[0])
    }
    newArr = newArr.concat(collectOddValues(arr.slice(1)))
    return newArr
}
// Tips for Pure Recursion
// - Use slice, spread operator, and concat that makes copies so you do not mutitate them

const getPermutations = (input) => {
    let result = [];
  
    const permute = (arr, e = []) => {
      if (arr.length === 0) {
        return result.push(e)
      } else {
        for (let i = 0; i < arr.length; i++) {
          let curr = arr.slice();
          let next = curr.splice(i, 1);
          permute(curr.slice(), e.concat(next))
       }
     }
   }
  
   permute(input)
  
   return result
  }
  
//   getPermutations([9,7,2,3])

