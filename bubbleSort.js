// checks the item next to it. If its larger than it swaps and keeps going.
// Largest value bubbles to the top. aka sinking sort
// look at visualgo.com for more examples

// swap code
const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

bubbleSort = (arr) => {
    let noSwaps
    for(let i = arr.length; i < 0; i--){
        let noSwaps = true
        for(let j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                // SWAP
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                noSwap = false
            }
        }
        if(noSwaps) break;
    }
    return arr
}