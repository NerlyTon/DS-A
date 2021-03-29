// Magic Square Rules
// 3 x 3 magic square needs to sum up to 15.
// 4 corners of the square need to be even numbers
// Middle square is going to always be a 5
// Numbers surrounding the 5 thats are not corners need to be odd numbers
// Diagonal corner numbers have the be either [2 and 8] or [4 and 6] because they have to add up to 10 since the sum of the diagonal should be 10 + 5(since 5 is always in the middle)
// Odd diagonals also have to add up to 10 so the pairs for those are [7 and 3] or [9 and 1]

function formingMagicSquare(s) {
    // Length of array
    let n = s[0].length
    let newArr = []
    // iterate through matrix, add each element to newArr
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            newArr.push(s[i][j])
        }
    }

    let changes = []
    let result = 0
    for (let i = 0; i < newArr.length; i++) {

        switch (i) {
            case 0: {
                if (newArr[i] == 8) {
                    let beforeChange = newArr[8]
                    newArr[8] = 2
                    changes.push(Math.abs(beforeChange - newArr[8]))
                }
                if (newArr[i] == 2) {
                    let beforeChange = newArr[8]
                    newArr[8] = 8
                    changes.push(Math.abs(beforeChange - newArr[8]))
                }
                if (newArr[i] == 4) {
                    let beforeChange = newArr[8]
                    newArr[8] = 6
                    changes.push(Math.abs(beforeChange - newArr[8]))
                }
                if (newArr[i] == 6) {
                    let beforeChange = newArr[8]
                    newArr[8] = 4
                    changes.push(Math.abs(beforeChange - newArr[8]))
                }
            }
                break;
        }
    }
}
