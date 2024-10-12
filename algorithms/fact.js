
const factRecursion = (num) => {
    if (num > 1) { return factRecursion(num-1)*num }
    if (num === 1) { return 1 }
    if (num < 1) { return 0 }
}

console.log(factRecursion(5))
