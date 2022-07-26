

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

/*
sort nums array

create result array

iterate through nums array
    if valeu at prev is the same as currVal
        continue to next iteration
        
    if currVal is greater then 0
        return result

    create currVal with current value in nums
    create left with currentIndex + 1
    create right with string length - 1
    
    while left is less then right
        create sum with value at left and value at right and currVal
        
        if sum is less then 0 
            increment left by 1
            
        else if sum is greater then 0
            decrement right by 1
            
        else
            push [value at left, value at right, and currVal] into result
            increment value of left by 1
            decrement value of right by 1
            
            while the current value is the same as prev value
                increment left by 1
                
            while the current valus is them same as next value
                decrement right by 1
            
return result
            
        

*/