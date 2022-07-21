function isValidChar(char) {
    if (
        (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z')
        || (char >= '0' && char <= '9')
    ) {
        return true;
    }
    
    return false;
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let l = 0;
    let r = s.length - 1;
    
    while (l < r) {
        
        while (l < r && !isValidChar(s[l])) {
            l += 1;
        }
        
        while (l < r && !isValidChar(s[r])) {
            r -= 1;
        }
        
        if (s[l].toLowerCase() !== s[r].toLowerCase()) {
             return false;
        }
        
        l += 1;
        r -= 1;
    }
    
    return true;
};

/*
create left with a pointer at far left side of string
create right wiuth a pointer at far right side of string

while left is smaller then right
    create char1 
    create char2 
    
    if char1 is not a character
        increment left by 1
        continue
        
    if char2 is not a character
        decrement char2 by 1
        continue
        
    make char1 lowercase
    make char2 lowercase
    
    if char1 does NOT equal char2
        return false
    
    increment left by 1
    decrement right by 1
        
return true

*/