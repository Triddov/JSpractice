class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {

        if (nums.length === 1) { return nums[0] }

        let max = 0


        for (let i = 2; i <= nums.length - 1; i++) {
               max = Math.max(nums[i-1], nums[i] + nums[i-2])


        }

        return max

    }
}