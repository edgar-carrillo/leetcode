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
    
    return [];
};

/*

create map with an empty object

itereate through nums
    if target - current number exists in map
        return target - current numbers index and current index
        
    add current index as value to current number in map
    
return an empty array
*/