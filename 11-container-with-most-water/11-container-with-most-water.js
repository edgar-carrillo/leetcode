/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0;
    let r = height.length - 1;
    let max = 0;
    
    let length;
    let width;
    let area;
    while (l < r) {
        length = r - l;
        width = Math.min(height[l], height[r]);
        area = length * width;
        
        max = Math.max(max, area);
        
        if (height[l] > height[r]) r -= 1;
        else l += 1;
    }
    
    return max;
};

/*

create l with 0
create r with heights length - 1
create max with 0

create length
create width
create area
while l is less the r
    have length be r - l
    have width be the smallest number between num at l and num at r
    have area be length * width
    
    have max be either max or area, whichever is largest
    
    if value at l is larger then value at r
        decrease r by 1
    otherwise 
        increase l by 1
        
return max
    

*/

/*
in
    - (array) - array of integers
out:
    - (integer)
cons:

edge:
    - if both pointers are the same, increment left pointer by 1
*/