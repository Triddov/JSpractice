/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {

    const num1 = val

    const toBe = (num2) => (num1 === num2) || (() => { throw new Error("Not Equal")})()

const notToBe = (num2) => (num1 !== num2) || (() => { throw new Error("Equal")})()

    return {
        toBe: toBe,
        notToBe: notToBe
    }
};


expect(10).toBe(10) // true
expect(5).notToBe(9) // throws "Equal"
