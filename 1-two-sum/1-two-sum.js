/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if (!nums.length) return [];
    
    const map = {};
    
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (map[target - num] !== undefined) return [map[target - num], i];
        map[num] = i;
    }
};

/*

if the length of nums is 0, return an empty array

declare map with an empty object

iterate over each num in nums
    if target - num is inside hash
        return an array with target - num and i
    otherwise
        add num to hash with index as value

*/

/*
in:
    - nums - (array) - array of numbers
    - target - (integer) - a number
out:
    - (array) - an array with the two indecies that add up to target 
cons:
    - only one valid answer exists.
    - strive for O(n) or better time complexity!
edge:
    - none
*/