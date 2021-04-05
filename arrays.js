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
