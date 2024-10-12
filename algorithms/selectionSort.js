const {randomList} = require('./randomNums')

/* Returns a sorted list
O(N**2) */
function selectionSort(List){
    for(let i = 0; i < List.length; i++){
        let minIndex = i
        for(let j = i+1; j < List.length; j++){
            if(List[j] < List[minIndex]){
                minIndex = j
            }
        }
        let temp = List[i]
        List[i] = List[minIndex]
        List[minIndex] = temp
    }
    return List
}

let unsortedList = randomList({listLength: 15, elemMin: 0, elemMax: 100})
console.log(`unsorted list:`, unsortedList)

let sortedList = selectionSort(unsortedList)
console.log(`sorted list:`, sortedList)
