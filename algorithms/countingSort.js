const {randomInt, randomArray} = require("./randomNums.js")

/* Подходит для случаев большого кол-ва повторений при небольшом кол-ве уникальных значений
O(N)*/
function countingSort(arr) {
    if (arr.length === 0) return []
    if (arr.length === 1) return arr

    const maxElem = Math.max(...arr)
    let countArr = new Array(maxElem+1).fill(0)
    let sortArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== undefined) {
            countArr[arr[i]]++
        }
    }

    for (let i = 0; i < countArr.length; i++) {
        while (countArr[i] > 0) {
            sortArr.push(i)
            countArr[i]--
        }
    }
    return sortArr
}

const arrLength = randomInt({min: 0, max: 15})
let unsortedArr = randomArray({arrLength: arrLength, elemMin: 0, elemMax: 15})
let sortedArr = countingSort(unsortedArr)

console.log(`unsorted array:`, unsortedArr)
console.log(`sorted array:`, sortedArr)
