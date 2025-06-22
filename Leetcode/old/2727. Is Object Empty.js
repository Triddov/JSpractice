function isEmpty(object){
    object = JSON.stringify(object)
    let result = false
    object.length === 2 ? result = true : result = false
    return result
}

anyObject1 = {key: "value"}
anyObject2 = {}
console.log(anyObject1, isEmpty(anyObject1), "\n", anyObject2, isEmpty(anyObject2) )


