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