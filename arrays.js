// Two Number Sum
// Problem: Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If
// any two numbers in the input array sum up to the target sum, the function should return them in an array.

function twoNumberSum(array, targetSum) {
    // Write your code here.
      for(let i = 0; i < array.length; i++) {
          const numberOne = array[i]
          for(let j = i + 1; j < array.length; j++) {
              const numberTwo = array[j]
              if(numberOne + numberTwo === targetSum) {
                  return [numberOne, numberTwo]
              }
          }
      }
          return []
  }

//   nested array means O(n^2) and for space is O(1)
// To make it better o(n) time and space

function twoNumberSum(array, targetSum) {
    const nums = {}
      for (const number of array) {
          const match = targetSum - number
          if(match in nums) {
              return [match, number]
          } else {
              nums[number] = true
          }
      }
      return []
  }
  
//   Another possible solution but with O(nlog(n)) and O(1) space. 

function twoNumberSum(array, targetSum) {
    array.sort((a,b) => a - b)
    let left = 0
    let right = array.length - 1
    while (left < right) {
        const currentSum = array[left] + array[right]
        if(currentSum === targetSum) {
            return [array[left], array[right]]
        } else if (currentSum < targetSum) {
            left++
        } else if (currentSum > targetSum) {
            right--
        }
    }
    return []
  }

//   Longest consecutive substring leetcode# 128 Level Hard.

longestConsecutive = (nums) => {
    let set = new Set()

    for(let num of nums) {
        set.add(num)
    }

    let longestStreak = 0

    for(let num of set) {
        if (!set.has(num - 1)){
            let currentNum = num
            let currentStreak = 1

            while (set.has(currentNum + 1)) {
                currentStreak += 1
                currentNum += 1
            }
            longestStreak = Math.max(longestStreak, currentStreak)
        }
    }
}

// smallest difference
// Write a function that takes in two non empty arrays on integers, find the pair of numbers that whose absolute difference in closest to zero.

function smallestDifference(arrayOne, arrayTwo) {
	arrayOne.sort((a,b) => a - b)
	arrayTwo.sort((a,b) => a - b)
	
  let first = 0
	let second = 0
	let smallest = Infinity
	let current = Infinity
	let smallestPair = []
 
	while(first < arrayOne.length && second < arrayTwo.length) {
		let firstNum = arrayOne[first]
		let secondNum = arrayTwo[second]
		if(firstNum < secondNum) {
			current = secondNum - firstNum
		first ++
		} else if (secondNum < firstNum) {
		current = firstNum - secondNum
		second++
	} else {
		return [firstNum, secondNum]
	}
	
	if (smallest > current) {
		smallest = current
		smallestPair = [firstNum, secondNum]
	}
}
return smallestPair
}


// Sorted Squared Array

const array = [1, 2, 3, 4]
// let newArray = []

// function sortedSquaredArray(array) {
//     for (let num of array) {
//         const squared = num ** 2
//         newArray.push(squared)
//     }
//     return newArray.sort((a, b) => a - b)
// }

// O(nlogn) time O(n) space
function sortedSquaredArray(array) {
    const sorted = new Array(array.length).fill(0)
    
    for (let i = 0; i < array.length; i++) {
        sorted[i] = array[i] ** 2
    }
sorted.sort((a, b) => a - b)
return sorted;
}

// array of products
// solution with division
// medium 
function arrayOfProducts(array) {
    let newArray = []
      let num = 1
      let counter = 0
      let rememberNum 
      
      if(array.length === 0) {
          return array
      }
      
      for(let i = 0; i < array.length; i++) {
          if(array[i] === 0) {
              counter += 1
              rememberNum = i
                  if(counter > 1) {
                      return new Array(array.length).fill(0);
                  } 
          }
           num *= array[i] == 0 ? 1 : array[i]
      }
      
      for(let i = 0; i < array.length; i++) {
          if (i == rememberNum){
              newArray = new Array(array.length).fill(0);
              newArray[i] = num
              return newArray
          } 
          let n = num/array[i]
              newArray.push(n)
      }
      
      return newArray
  }

//   array of products (second solution)
function arrayOfProducts(array) {
    const products = new Array(array.length).fill(1)
      const leftProducts = new Array(array.length).fill(1)
      const rightProducts = new Array(array.length).fill(1)
      
      let leftRunningProduct = 1
      for (let i = 0; i < array.length; i++) {
          leftProducts[i] = leftRunningProduct
          leftRunningProduct *= array[i]
      }
      
      let rightRunningProduct = 1
      for (let i = array.length - 1; i > -1; i--) {
          rightProducts[i] = rightRunningProduct
          rightRunningProduct *= array[i]
      }
      
      for (let i = 0; i < array.length; i++) {
          products[i] = leftProducts[i] * rightProducts[i]
      }
  
      return products
  }

//   merge overlapping intervals 
function mergeOverlappingIntervals(array) {
const sortedArray = array.sort((a, b) => a[0] - b[0])
	
	const mergedIntervals = []
	let currentInterval = sortedArray[0]
	mergedIntervals.push(currentInterval)
	
	for(const nextInterval of sortedArray) {
		const [_, currentIntervalEnd] = currentInterval
		const [nextIntervalStart, nextIntervalEnd] = nextInterval
		
		if (currentIntervalEnd >= nextIntervalStart) currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd)
		else {
			currentInterval = nextInterval
			mergedIntervals.push(currentInterval)
		}
	}
	return mergedIntervals
}

// how to bubble sort

function bubbleSorting(array) {
let finished = false
	while(!finished) {
		finished = true
		for(let i =1; i < array.length; i++){
			if(array[i -1][0] > array[i][0]) {
				finished = false
				let temp = array[i -1][0]
				array[i -1][0] = array[i][0]
				array[i][0] = temp
			}
		}
	}
    return array
}

// first duplicate value
function firstDuplicateValue(array) {
  
      let map = new Map()
      
      for(let i = 0; i < array.length; i++) {
          if(map.has(array[i])) {
              return array[i]
          } else {
              map.set(array[i])
          }
      }
    return -1;
  }

//   monotonic array
function isMonotonic(array) {
   
      let increasing = true
      let decreasing = true
      
      if(array.length === 0 || array.length === 1) {
          return true
      }
      
      
      for(let i = 0; i < array.length; i++) {
              if(array[i] > array[i + 1]) {
              increasing = false
          } 
          
              if (array[i + 1] > array[i]) {
              decreasing = false
          } 
          
          }
      
      return increasing || decreasing
      }