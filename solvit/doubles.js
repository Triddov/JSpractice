class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    containsDuplicate(nums) {

        const uniqueElems = new Set(nums)

        return nums.length !== uniqueElems.size

    }
}