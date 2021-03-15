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
  