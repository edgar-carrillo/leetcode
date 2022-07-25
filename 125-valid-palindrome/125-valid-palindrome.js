function isValidChar(char) {
    if (char >= '0' && char <= '9') return true;
    if (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') {
        return true;
    }
    return false;
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s.length <= 1) return true;
    
    let l = 0;
    let r = s.length - 1;
    
    while (l < r) {
        while (l < r && !isValidChar(s[l])) {
            l += 1;
        }
        
        while (l < r && !isValidChar(s[r])) {
            r -= 1;
        }
        
        if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
        
        l += 1;
        r -= 1;
    }
    
    return true;
};

/*
if words has 1 or less characters in it
    return true

create left with 0
create right with the length of words - 1

while left is less then right
    while left is less then right AND and the left char is NOT valid
        increment the value of left by 1
        
    while left is less then right AND the right char is NOT valid
        decrement the value of right by 1
        
    if the char at left is NOT the same as the char at right
        return false
        
    increment left by 1
    decrement right by 1


return true

*/

/*
in:
    - (string) - a string of characters
OUT:
    - (boolean) - true of palindrome, false otherwise
CONS:
    - check leetcode
EDGE:
    - 
*/

/*

''
RETURN: true

' '
RETURN: true

'A man, a plan, a canal: Panama'
RETURN: true

'aafv'
RETURN: false
*/