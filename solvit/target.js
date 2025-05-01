class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        const indexObj = {}
        const finalIndexes = []

        for (let i = 0; i < nums.length; i++) {

            const complement = target - nums[i]

            if (complement in indexObj){
                finalIndexes.push(indexObj[complement])
                finalIndexes.push(i)

                return finalIndexes
            }

            indexObj[nums[i]] = i
        }
    }
}