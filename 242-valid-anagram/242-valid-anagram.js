/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    const charHash = {};
    
    for (const char of s) {
        charHash[char] = (charHash[char] || 0) + 1;
    }
    
    for (const char of t) {
        if (!(char in charHash)) return false;
        
        charHash[char] -= 1;
        
        if (charHash[char] < 0) return false;
    }
    
    return true;
};


/* ---------- PSEUDO ---------- */

/*

    if both strings have different lengths
        return false
        
    declare var called charHash init with empty object
        
    iterate over s
         if the property of currChar does not exist in charHash
             give it a value of 1
         otherwise
             increment the value by 1
             
    iterate over t
        if the current character does not exist in charHash
        
        decrement value at currChar by 1
        
        if value at currChar is negative
            return false
            
    return true

*/

/* ---------- IOCE ---------- */

/*

    in:
        - s - (string) - a word
        - t - (string) - a word
    out:
        - (boolean) - true if both string inputs are anagrams of each other. false otherwise
    cons:
        do O(n)
    edge:
        - if both strings have different lengths return false
        - case should not matter.

*/