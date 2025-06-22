const {randomInt} = require("../algorithms/randomNums")
/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    let strx = x.toString()
    let left = null, right = null

    if (strx.length%2 === 0){
        left = strx.slice(0, strx.length/2).split('').reverse().join('')
        right = strx.slice(-(strx.length/2))
    }else{
        left = strx.slice(0, (strx.length/2)+1).split('').reverse().join('')
        right = strx.slice(-((strx.length/2)+1))
    }
    return left === right
}

const num = 12321
console.log(isPalindrome(num))

