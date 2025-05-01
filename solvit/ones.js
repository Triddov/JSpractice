class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {

        const joinStr = nums.join("")

        if (!joinStr.includes("0")) {
            return joinStr.length
        }
        const splitArray = joinStr.split("0")

         let maxLengthStr = Math.max(...splitArray.map(item => item.length))

        return maxLengthStr

    }
}