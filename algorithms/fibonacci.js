const {randomInt} = require("./randomNums.js")

// Думал так можно((
/*const FibonacciArray =  Array.from({length: 10}, (_,i) => {
    if (i===1) {return 1}
    return FibonacciArray[i+1] + FibonacciArray[i+2]
});*/

const generateFibonacci = ({ length }) => {
    if (length <= 0) return []
    if (length === 1) return [1]

    const fibonacciArray = [1, 1]

    while (fibonacciArray.length < length) {
        const nextNumber = fibonacciArray[fibonacciArray.length - 1] + fibonacciArray[fibonacciArray.length - 2]
        fibonacciArray.push(nextNumber)
    }

    return fibonacciArray;
};

const arrayLength = 35
const FibonacciArray = generateFibonacci({length: arrayLength})

// O(2**N)
const numFibonacciRecursion = (num) =>
    (num === 1 || num === 2) ? 1 : numFibonacciRecursion(num-2) + numFibonacciRecursion(num-1)


// O(n)
const numFibonacciCache = (num, cache={}) => {
    if (num in cache) {return cache[num]}
    if (num<=2) {return 1}
    cache[num] = numFibonacciCache(num-1, cache) + numFibonacciCache(num-2, cache)
    return cache[num]
}

const randFibonacciNum = randomInt({min: 1, max: 35})

console.log(`Первые ${arrayLength} чисел Фибоначчи: `, FibonacciArray)
console.log(`${randFibonacciNum}-ое число Фибоначчи - это:`)
console.log(`${numFibonacciCache(randFibonacciNum)} (кэшем)`)
console.log(`${numFibonacciRecursion(randFibonacciNum)} (рекурсией)`)
