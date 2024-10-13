const {randomInt, randomList} = require("./randomNums")

// O(N*logN)
function quickSort (array){
    if (array.length <= 1){ return array }

    let pivotIndex = Math.floor(array.length/2)
    let pivot = array[pivotIndex]
    let lessElems = [], greaterElems = []
    for(let i = 0; i < array.length; i++){
        if (i === pivotIndex){ continue }
        if (array[i] < pivot){
            lessElems.push(array[i])
        }else{
            greaterElems.push(array[i])
        }
    }
    const finishedArray = [...quickSort(lessElems), pivot, ...quickSort(greaterElems)]
    return finishedArray
}

const arrayLength = randomInt({min:10, max:50});
const unsortedArray = randomList({listLength:arrayLength, elemMin:-10, elemMax:50})
console.log(`unsorted array`, unsortedArray)
const sortedArray = quickSort(unsortedArray)
console.log(`sorted array`, sortedArray)

