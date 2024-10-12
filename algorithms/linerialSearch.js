const {randomInt, randomList} = require("./randomNums")

/*
Returns the index for search element from list
O(n**2)
*/
function linealSearch({numbersList, searchNum} = {}){
    for(let position = 0; position <= numbersList.length; position++){
        if (numbersList[position] === searchNum){
            return position
        }
    }
    return null
}

let List = randomList({listLength: 20, elemMin: 0, elemMax: 20})
const num = randomInt({min: 0, max: 20})

outputIndex = linealSearch({numbersList: List, searchNum: num})
console.log(List)
console.log(`index of element ${num} is ${outputIndex}`)
