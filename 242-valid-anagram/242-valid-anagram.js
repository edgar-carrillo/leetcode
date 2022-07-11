/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(str1, str2) {
    if (str1.length !== str2.length) return false;
    
    const map = Object.create(null);
    
    for (const char of str1) {
        map[char] = (map[char] || 0) + 1;
    }
    
    for (const char of str2) {
        if (map[char]) {
            map[char] -= 1;
        } else {
            return false;
        }
    }
    
    return true;
};
