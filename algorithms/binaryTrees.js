const {randomInt} = require("./randomNums.js")

/* generate no-balance Binary Tree */
function generateBinaryTree(depth, currentDepth= 0){
    if (currentDepth >= depth) { return null }
    const nodeValue = Math.floor(Math.random()*100) // random number from 1 to 100
    const node = {value: nodeValue, L: null, R: null }

    node.L = generateBinaryTree(depth, currentDepth+1)
    node.R = generateBinaryTree(depth, currentDepth+1)

    return node
}

// TODO: balancing tree algorithm
function balanceBinaryTree(binaryTree){

}

function DFS(node, vertexArr=[]){
    if (node === null) return
    vertexArr.push(node.value)
    DFS(node.L, vertexArr)
    DFS(node.R, vertexArr)

    return vertexArr
}

function BFS(node){
    let vertexArr= [node.value]
    let tmpQueue = [node.L, node.R]

    while (tmpQueue.length !== 0) {
        let element = tmpQueue.shift()

        if (element !== null) {
            vertexArr.push(element.value)
            if (element.L !== null){ tmpQueue.push(element.L) }
            if (element.R !== null){ tmpQueue.push(element.R) }
        }
    }
    return vertexArr
}

function printTree(node, level = 0) {
    if (node !== null) {
        printTree(node.R, level + 1)
        console.log(' '.repeat(4 * level) + '->', node.value)
        printTree(node.L, level + 1)
    }
}

const depthLevel = randomInt({min:2, max:5})
const binaryTree = generateBinaryTree(depthLevel)

printTree(binaryTree)

console.log(`\nОбход в глубину (с корня и влево): ${DFS(binaryTree)}`)
console.log(`\nОбход в ширину (слева-направо): ${BFS(binaryTree)}`)
