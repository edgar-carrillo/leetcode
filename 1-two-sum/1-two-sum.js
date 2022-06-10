/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numsHash = {};
    
    for (let i = 0; i < nums.length; i++) {
        const currNum = nums[i];
        const differenceNum = target - currNum;
        
        if (differenceNum in numsHash) {
            return [numsHash[differenceNum], i];
        }
        
        if (!(differenceNum in numsHash)) {
            numsHash[currNum] = i;
        }
    }
};

/* --------- PSEUDO --------- */

/*

declare a obj called numsHash init with empty obj


iterate through nums
    declare currNum
    
    declare differenceNum init with target - currNum
    
    if differenceNum is in numsHash
        return an array with index of prop in numsHash AND i
            
        
    if differenceNum is NOT in numsHash
        add currNum AND i as value to numsHash
    
        
            


*/

/* --------- IOCE --------- */

/*
    in:
        - nums - (array) - array of integers
        - target - (integer) - the sum we want to get.
    out:
        - pair - (array) - the numbers that summed together make up target
    cons:
        - we only need to return a pair
    edge:
        - none
*/