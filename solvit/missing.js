class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {

        const n = nums.length + 1
        const standardArray = [...Array(n).keys()]

        const standardSum = standardArray.reduce((sum, currentValue) => sum + currentValue, 0)

        const numsSum = nums.reduce((sum, currentValue) => sum + currentValue , 0)

        return standardSum - numsSum
    }
}