const timeout = 3500

function giveBackStatus(resolve, reject) {
    console.log("Pending...")
    setTimeout(() => {
        Math.random() > 0.5 ? resolve(200) : reject(500)
    }, timeout)
}

const testPromise = new Promise(giveBackStatus)

testPromise.then((successCode) => {console.log(`Done! status: ${successCode}\n`)})
    .catch((errorCode) => {console.log(`Error! status: ${errorCode}\n`)})
    .finally(() => {console.log(`What are you gonna do then?`)})


// async function testPromise(){
//     return new Promise(giveBackStatus)
// }

// const statusResult = await testPromise()
// console.log(statusResult)


/* here I wanted to code more async and await functions to memorize them, but I'm too lazy at 2 a.m. */
