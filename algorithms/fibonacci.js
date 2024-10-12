
const NumFibonacci = (num) =>
    (num === 1 || num === 2) ? 1 : NumFibonacci(num-2) + NumFibonacci(num-1)



console.log(NumFibonacci(8))
