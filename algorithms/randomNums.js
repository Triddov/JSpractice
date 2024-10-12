function randomInt({min= 0, max = 0} = {}){
    if (max >= min) {
        return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min)+1)) + min
    }
    return null
}

function randomList({listLength= 1, elemMin= 0, elemMax= 0} = {}){
    if (listLength<=0 || elemMax < elemMin){
        return null
    }

    let list = new Array(listLength)
    for(let i= 0; i<list.length; i++){
        list[i] = randomInt({max: elemMax, min: elemMin})
    }
    return list
}

module.exports = {randomInt, randomList}
