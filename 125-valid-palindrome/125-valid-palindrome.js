function isValidChar(char) {
    if (
        (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') ||
       (char >= '0' && char <= '9')
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
    if (s.length === 1) return true;
    
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
    
    return true
};
