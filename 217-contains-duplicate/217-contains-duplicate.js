/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const hash = {};
    
    for (let i = 0; i < nums.length; i++) {
        const currNum = nums[i];
        hash[currNum] = (hash[currNum] || 0) + 1;
        
        if (hash[currNum] === 2) return true;
    }
    
    return false;
};