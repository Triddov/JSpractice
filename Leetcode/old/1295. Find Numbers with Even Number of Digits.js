/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {

    const ans = nums.reduce((sum, currentValue) => {
        if (currentValue.toString().length % 2 === 0){
            return ++sum
        } else {
            return sum
        }
    }, 0 )

    return ans
};

nums = [55, 6767, 7837, 898988, 9 , 9]
console.log(findNumbers(nums))
