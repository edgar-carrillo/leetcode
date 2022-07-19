const letters = {
    "a": 0,
    "b": 1,
    "c": 2,
    "d": 3,
    "e": 4,
    "f": 5,
    "g": 6,
    "h": 7,
    "i": 8,
    "j": 9,
    "k": 10,
    "l": 11,
    "m": 12,
    "n": 13,
    "o": 14,
    "p": 15,
    "q": 16,
    "r": 17,
    "s": 18,
    "t": 19,
    "u": 20,
    "v": 21,
    "w": 22,
    "x": 23,
    "y": 24,
    "z": 25
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(words) {
    if (!words.length) return [['']];
    
    const map = Object.create(null);
    
    for (const word of words) {
        const hashedWord = hashWord(word);
        if (!map[hashedWord]) {
            map[hashedWord] = [];
            
        }
        map[hashedWord].push(word);
    }
    
    return Object.values(map);
};

function hashWord(word) {
    const hash = new Array(26).fill(0);
    for (const char of word) {
        hash[letters[char]] += 1;
    }
    
    return hash.toString();
}
