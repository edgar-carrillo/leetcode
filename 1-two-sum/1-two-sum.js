/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if (!nums.length) return [];
    
    const map = Object.create(null);
    nums.forEach((num, i) => map[num] = i);
    
    for (let i = 0; i < nums.length; i++) {
        const num1 = nums[i];
        const num2 = target - num1;
        if (map[num2] && map[num2] !== i) return [i, map[num2]];
    }
    
    return [];
};

/*

create map with an empty object

iterate over each number in nums
    push value into map at num
    
iterate over each number in nums
    create num1 with target - current number
    create num2 with target - num1
    
    if num1 and num2 are the same and are in map
        return the value at num1 in amp
    if num1 is in map and num2 is in map
        return the joined value of num1 in map and num2 in map
        
return empty array

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