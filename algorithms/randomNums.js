function randomInt({min= 0, max = 0} = {}){
    if (max >= min) {
        return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min)+1)) + min
    }
    return null
}

function randomArray({arrLength= 1, elemMin= 0, elemMax= 0} = {}){
    if (arrLength<0 || elemMax < elemMin){
        return null
    }

    let arr = new Array(arrLength)
    for(let i= 0; i<arr.length; i++){
        arr[i] = randomInt({max: elemMax, min: elemMin})
    }
    return arr
}

module.exports = {randomInt, randomArray}
