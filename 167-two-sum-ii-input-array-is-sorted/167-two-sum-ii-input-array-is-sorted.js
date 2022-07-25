/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let start = 0;
    let end = numbers.length - 1;
    
    while (start < end) {
        let sum = numbers[start] + numbers[end];
        if (sum < target) start += 1;
        else if (sum > target) end -= 1;
        else return [start + 1, end + 1];
    }
    
    return [];
};

/*
create start with 0
create end with numbers.length - 1

while start is less then end
    create sum with start and end
    if sum is less then target increment start
    else if sum is greater then target, decrement end
    else return start + 1 and end + 1
    
return an empty array


*/