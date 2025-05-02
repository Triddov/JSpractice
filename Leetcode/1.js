/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    const indexNums = {}
    const finalIndexes = []

    for (let i = 0; i < nums.length; i++) {

        let complement = target - nums[i]

        if (complement in indexNums){
            finalIndexes.push(i)
            finalIndexes.push(indexNums[complement])

            return finalIndexes
        }
        indexNums[nums[i]] = i
    }
};