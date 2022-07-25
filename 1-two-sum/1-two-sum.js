/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {};
    
    for (let i = 0; i < nums.length; i++) {
        const currNum = nums[i];
        if ((target - currNum) in map) {
            return [map[target - currNum], i];
        }
        
        map[currNum] = i;
    }
};

