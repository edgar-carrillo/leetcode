/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hash = {};
    for (const num of nums) {
        hash[num] = (hash[num] || 0) + 1;
        if (hash[num] > 1) return true;
    }
    return false;
};
