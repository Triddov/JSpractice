const {randomList} = require("./randomNums");

/* Returns a sorted list
O(N**2) */
function bubbleSort(List){
    for(let i= 0; i < List.length; i++){
        for(let j = i; j < List.length; j++){
            if (List[i] > List[j]){
                let tmp = List[i]
                List[i] = List[j]
                List[j] = tmp
            }
        }
    }
    return List
}

let unsortedList = randomList({listLength: 15, elemMin: 0, elemMax: 100})
console.log(`unsorted list:`, unsortedList)

let sortedList = bubbleSort(unsortedList)
console.log(`sorted list:`, sortedList)
