class JsonStuff{
    constructor({ object }) {
        this.object = object
    }
    #number = null // private attribute

    stringifyObject(){
        return JSON.stringify(this.object)
    }
    parseObject(){
        return  JSON.parse(this.object)
    }
    set number(value){
        this.#number = value
    }
    get number(){
        return this.#number
    }
    static whatIsNumber(){
        return `мне просто надо было проверить приватные поля и статические функции`
    }
}

const anyObject = {name: "Kanye", lastname: "West"}

const newObject1 = new JsonStuff({object: anyObject})
const newObject2 = new JsonStuff({object: JSON.stringify(anyObject)})
const newNewObject1 = newObject1.stringifyObject()
const newNewObject2 = newObject2.parseObject()

console.log(newNewObject1, typeof newNewObject1)
console.log(newNewObject2, typeof newNewObject2)
