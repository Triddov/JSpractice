/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {

    let counter = init
    return {
        increment: () => ++counter,
        decrement: () =>  --counter,
        reset: () => {
            counter = init
            return counter
        },
    }
};


// const counter = createCounter(5)
// console.log(counter.increment())// 6
// counter.reset(); // 5
// console.log(counter.decrement()) // 4
