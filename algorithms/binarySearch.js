const {randomInt} = require("./randomNums.js")

/*
Returns the index for search element from SORTED list
O(log N)
*/
function binarySearch({numbersList, searchNum} = {}){
    let left = 0, right = numbersList.length, middle = null
    let isFound = false
    let position = null

    while (isFound === false && left <= right){
        middle = Math.floor((left + right) / 2)
        if (numbersList[middle] === searchNum){
            isFound = true
            position = middle
            return position
        }
        if (numbersList[middle] > searchNum){ right = middle-1 }
        if (numbersList[middle] < searchNum){ left = middle+1 }
    }
    return null
}

const arrLength = randomInt({min: 6, max: 35})
let List = Array.from({length: arrLength}, (_, i) => i++) // нашел аналог list comprehension в Python
const num = randomInt({min: 1, max: 10})

outputIndex = binarySearch({numbersList: List, searchNum: num})
console.log(List)
console.log(`index of element ${num} is ${outputIndex}`)

