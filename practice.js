// Need to find how many intervals has the point (4)


let intervals = [[1,5], [2,6], [1,4], [8,15]]
let point = 4


class Solution {
    solve(intervals, point) {
        let counter = 0
        let included = intervals.map(arr => {
            if (arr[0] <= point && arr[1] >= point){
                counter++
            }
        })
        return counter
    }
}

// longest consecutive sequence

longestConsecutive = (nums) => {
    let set = new Set()    
    for(let num of nums) {
        set.add(num)
    }    
    
    let longestSeq = 0    
    for(let num of set) {
         if (!set.has(num - 1)){
            let currentNum = num
            let currentSeq = 1            
         
            while (set.has(currentNum + 1)) {
                currentSeq += 1
                currentNum += 1
            }
            longestSeq = Math.max(longestSeq, currentSeq)
        }
    }
}

// is a valid subsequence one array compared to the other

function isValidSubsequence(array, sequence) {
    
  let aIdx = 0
  let sIdx = 0
  
  while (aIdx < array.length && sIdx < sequence.length) {
      if (array[aIdx] === sequence[sIdx]) sIdx++
          aIdx++
      }
      return sIdx === sequence.length
}

// Search a longer string to find if shorter string is in there

const ls = "wowomgwomg" 
const ss = "omg"

subStringCounter = (ls, ss) => {
    let counter = 0
    for(let i = 0; i < ls.length; i++) {
        for(let j = 0; j < ss.length; j++) {
            if(ss[j] !== ls[i + j]) {
                break
            } if(j === ss.length - 1) {
                count ++
                
            }
        }
    }
    return counter 
}