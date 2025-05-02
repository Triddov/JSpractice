/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    const minStr = strs.reduce((min, currentStr) =>
        (min < currentStr.length) ? min : currentStr.length, 0)

    const commonPrefixStr = ""




    // for (let i = 0, l = strs.length; i < l; i++) {
    //     for (let j = 0; j < minStr; j++) {
    //
    //     }
    // }
};

longestCommonPrefix(["flower","flow","flight"])
