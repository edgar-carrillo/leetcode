/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(str1, str2) {
    if (str1.length !== str2.length) return false;
    
    const hash = Object.create(null);
    
    for (const char of str1) {
        hash[char] = (hash[char] || 0) + 1;
    }
    
    for (const char of str2) {
        if (!hash[char]) return false;
        hash[char] -= 1;
        if (hash[char] < 0) return false;
    }
    
    return true;
};
