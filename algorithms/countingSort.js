const {randomInt, randomList} = require("./randomNums")

/* Подходит для случаев большого кол-ва повторений при небольшом кол-ве уникальных значений
O(N)*/
function countingSort(arr) {
    const minElem = Math.min(...arr)
    const maxElem = Math.max(...arr)
    let countArr = new Array(maxElem-minElem+1).fill(0)
    for (let i = 0; i <= countArr.length; i++) {
        countArr[arr[i]]++
    }
    return countArr
//     дописать развертку массива по массиву частотности (не рабочий пока что)
}

let unsortedArr = randomList({listLength: 1, elemMin: 0, elemMax: 10})
console.log(`unsorted array:`, unsortedArr)
let sortedArr = countingSort(unsortedArr)
console.log(sortedArr)



