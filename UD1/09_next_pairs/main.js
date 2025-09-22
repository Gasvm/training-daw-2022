const assert = require('assert').strict;

function nextPairs(value) {
    let result = []

    if (value % 2 === 1){
        result = [value-1, value+1]
    } else {
        result = [value-2, value+2]
    }

    return result
}

assert.deepStrictEqual(nextPairs(3), [2, 4])
assert.deepStrictEqual(nextPairs(4), [2, 6])

console.log("All tests passed!");