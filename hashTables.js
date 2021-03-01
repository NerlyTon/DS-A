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


class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size)
    }

    _hash(key) {
        let total = 0
        let WEIRD_PRIME = 31
        for(let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length
        }
        return total
    }

    set(key,value) {
        let index = this._hash(key)
        if(!this.keyMap[index]) {
            this.keyMap[index] = []
        }
        this.keyMap[index].push([key, value])
    }
}