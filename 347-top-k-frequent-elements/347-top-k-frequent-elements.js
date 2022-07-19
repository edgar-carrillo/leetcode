/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let result = [];
    let map = {};
    let bucket = Array.from({ length: nums.length + 1 }, () => []);
    
    for (let num of nums) map[num] = (map[num] || 0) + 1;
    
    for (const key in map) bucket[map[key]].push(key);
    
    for (let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i].length) {
            for (const num of bucket[i]) {
                result.push(num);
                if (result.length === k) return result;
            }
            
        }
    }
};