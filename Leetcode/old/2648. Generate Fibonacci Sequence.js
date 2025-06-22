/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {

    const fibArray = [0, 1]

    yield fibArray[0]
    yield fibArray[1]

    for (let i = 1; i <= fibArray.length - 1; i++) {
        const nextFib = fibArray[i-1] + fibArray[i]
        fibArray.push(nextFib)
        yield nextFib
    }
};


// const gen = fibGenerator();
// gen.next().value // 0
// gen.next().value; // 1
// gen.next().value; // 1
// gen.next().value; // 1
