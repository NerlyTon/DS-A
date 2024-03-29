// -----------------------------------------------------------------------------
// HASH TABLE NOTES
// *Prime number length for hash tables is necesarry to decrease collision


// *Collision
//  -- Seperate Chaning: Store data in the same index then loop when need to get value
//  -- Linear Probing: Look ahead for the next empty slot

// Pseudocode for SET
// - Accepts a key and value
// - Hashes the key
// - Stores the key-value pair in the hash table via seperate chaining

// Pseudocode for GET
// - Accepts a key 
// - Hashes the key
// - Retrieves the key-value pair in the hash table
// - If the key isnt found, return undefined

// ----------------------------------------------------------------------------

// In JS we dont need to create our own HashTable. We can use Map() or Object.
// Below will be the JS code version example

const map = new Map()

map.set('key1', '[value1]') 
map.get('key1')
map.delete('key1')
map.get('key1').push('value2')
map.has('key1')
map.size
return [...map.values()].filter(m => m.length > 1)

// Below will be the from scratch code version example
// class HashTable {
//     constructor(size=53) {
//         this.keyMap = new Array(size)
//     }

//     _hash(key) {
//         let total = 0
//         let WEIRD_PRIME = 31
//         for(let i = 0; i < Math.min(key.length, 100); i++) {
//             let char = key[i]
//             let value = char.charCodeAt(0) - 96
//             total = (total * WEIRD_PRIME + value) % this.keyMap.length
//         }
//         return total
//     }

//     set(key,value) {
//         let index = this._hash(key)
//         if(!this.keyMap[index]) {
//             this.keyMap[index] = []
//         }
//         this.keyMap[index].push([key, value])
//     }

//     get(key) {
//         let index = this._hash(key)
//         if(this.keyMap[index]) {
//             for(let i = 0; i < this.keyMap[index].length; i++) {
//                 if(this.keyMap[index][i][0] === key) {
//                     return this.keyMap[index][i][1]
//                 }
//             }
//         }
//         return undefined
//     }

//     values() {
//         let valuesArray = []
//         for(let i = 0; i < this.keyMap.length; i++) {
//             if(this.keyMap[i]){
//                 for(let j = 0; j < this.keyMap[i].length; j++) {
//                     // handles duplicates
//                     if(!valuesArray.includes(this.keyMap[i][j][1]))
//                     valuesArray.push(this.keyMap[i][j][1])
//                 }
//             }
//         }
//         return valuesArray
//     }

//     keys() {
//         let keysArray = []
//         for(let i = 0; i < this.keyMap.length; i++) {
//             if(this.keyMap[i]){
//                 for(let j = 0; j < this.keyMap[i].length; j++) {
//                     if(!keysArray.includes(this.keyMap[i][j][0]))
//                     keysArray.push(this.keyMap[i][j][0])
//                 }
//             }
//         }
//         return keysArray
//     }
// }

// Code to find if there is a duplicate to return true or false

let s = "abcdefd"

class Solution {
    solve(s) {
        const hash = new Map()
        let arr = s.split("").sort()
        for (let i = 0; i < arr.length; i++){
            if (!hash.has(arr[i])){
               hash.set(arr[i])
            } else {
                    return false
            }
        }
        return true
    }
}