// checks the item next to it. If its larger than it swaps and keeps going.
// Largest value bubbles to the top. aka sinking sort
// look at visualgo.com for more examples

// swap code
const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}