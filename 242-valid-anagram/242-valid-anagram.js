/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    const lookup = {};
    
    for (let char of s) {
        lookup[char] = (lookup[char] || 0) + 1;
    }
    
    for (let char of t) {
        if (!lookup[char]) {
            return false;
        } else {
            lookup[char] -= 1;
        }
    }
    
    return true;
};


/* ---------- PSEUDO ---------- */

/*

    if s character length does NOT equal the amount of characters in t
        return false
        
    declare a var called lookup init with an empty object
    
    iterate over characters in s
        init value at curr character with 0 if not exist or increment by 1 if it does exist in lookup
        
    iterate over characters in t
        if the value at current character in lookup is false
            return false
        otherwise
            decrement value at current character in look up by 1
            
    return true;
*/