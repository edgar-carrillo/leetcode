function insertionSort(nums) {
    for (let i = 0; i < nums.length; i++) {
        const currVal = nums[i];
        for (var j = i - 1; j >= 0 & nums[j] > currVal; j--) {
            nums[j + 1] = nums[j];
        }
        nums[j + 1] = currVal;
    }
    return nums;
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    insertionSort(nums);
    let left = 0;
    let right;
    const result = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) return result;
        if (nums[i] === nums[i - 1]) continue;
        
        const currNum = nums[i];
        l = i + 1;
        r = nums.length - 1;
        let sum = 0;
        while (l < r) {
            sum = nums[l] + nums[r] + currNum;
            if (sum > 0) r -= 1;
            else if (sum < 0) l += 1;
            else {
                result.push([currNum, nums[l], nums[r]]);
                l += 1;
                r += 1;
                
                while (nums[l] === nums[l - 1]) l += 1;
                while (nums[r] === nums[r + 1]) r -= 1;
            }
        }
    }
    
    return result;
};

