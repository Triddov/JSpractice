class Solution {
    /**
     * @param {string[]} s
     * @return {void}
     */
    reverseString(s) {

        let leftIndex = 0
        let rightIndex = s.length - 1

        while (leftIndex < rightIndex){

            let tmp = s[rightIndex]
            s[rightIndex] = s[leftIndex]
            s[leftIndex] = tmp

            leftIndex++
            rightIndex--
        }
    }
}