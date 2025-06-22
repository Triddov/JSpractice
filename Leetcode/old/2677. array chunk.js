/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {

    // const subArraysNumber = arr.length/size
    //
    // const subArrays = Array.from({length: subArraysNumber}, () => [])
    //
    // for (let i = 0; i < subArraysNumber; i++) {
    //     for (let j = 0; j < size; j++) {
    //         console.log(arr[i])
    //         subArrays[i][j] = arr[i]
    //     }
    // }

    const subArrays = []

    if (size === 0) { return subArrays}

    for (let i = 0; i < arr.length; i+=size) {
        subArrays.push(arr.slice(i, i + size))
    }

    return subArrays
};

const arr = [1,1,2,3,4]
const size = 0
console.log(chunk(arr, size))