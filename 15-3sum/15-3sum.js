

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort((a, b) => a - b);
    
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) continue;
        if (nums[i] > 0) return result;
        
        const currVal = nums[i];
        let l = i + 1;
        let r = nums.length - 1;
        while (l < r) {
            const sum = nums[l] + nums[r] + currVal;
            
            if (sum < 0) l += 1;
            else if (sum > 0) r -= 1;
            else {
                result.push([nums[l], nums[r], currVal]);
                l += 1;
                r -= 1;
                
                while (nums[l] === nums [l - 1]) l += 1;
                while (nums[r] === nums[r + 1]) r -= 1;
            }
        }
    }
    
    return result;
};
