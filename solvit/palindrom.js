class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        let normalStr = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")

        if (normalStr.length % 2 !== 0) {
            const indexToRemove = Math.floor(normalStr.length/2)
            normalStr = normalStr.slice(0, indexToRemove) + normalStr.slice(indexToRemove+1)
        }

        return normalStr.slice(0, normalStr.length / 2) === normalStr.slice(normalStr.length / 2).split('').reverse().join('');
    }
}