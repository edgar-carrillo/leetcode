/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const map = {};
    let max = 0;
    
    let prev;
    let next;
    let sequenceLength;
    
    for (const num of nums) {
        if (num in map) continue;
        prev = num - 1;
        next = num + 1;
        sequenceLength = 1;
        
        if (prev in map) {
            if (next in map) {
                sequenceLength += map[prev] + map[next];
                map[prev - map[prev] + 1] = sequenceLength;
                map[next + map[next] - 1] = sequenceLength;
            } else {
                sequenceLength += map[prev];
                map[prev - map[prev] + 1] += 1;
            }
        } else if (next in map) {
            sequenceLength += map[next];
            map[next + map[next] - 1] += 1;
        }
        
        map[num] = sequenceLength;
        max = Math.max(sequenceLength, max);
    }
    
    return max;
};
