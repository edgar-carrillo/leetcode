/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let l = 0;
    let r = numbers.length - 1;
    
    while (l < r) {
        const sum = numbers[l] + numbers[r];
        if (sum > target) r -= 1;
        else if (sum < target) l += 1;
        
        if (sum === target) return [l + 1, r + 1];
    }
    
    return [];
};

/*

create left with 0
create right with numbers length - 1

while left is less then right
    create sum with leftnum and right num summed
    if sum is greater then target
        decrement right by 1
    else if sum is less then target
        increment left by 1

    if sum is target
        return [left index + 1, right index + 1]
        
return empty array


*/

/*
IN:
    - (array) - array of integers
OUT:
    - (array) - indexes of the two numbers that sum up to target. Make sure to increase the indexes by 1
CONS:
    - must be in O(1) space
EDGE
*/