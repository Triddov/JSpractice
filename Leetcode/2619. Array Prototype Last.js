/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    if (this.length === 0) return -1

    const lastElement = this[this.length-1]
    return lastElement
}


const arr = [null, {}, 3, 9.2, {}, true, null];
console.log(arr.last()); // 3

