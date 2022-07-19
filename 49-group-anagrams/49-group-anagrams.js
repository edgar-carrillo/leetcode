const createLetters = () => {
    return {
            "a": 0,
            "b": 0,
            "c": 0,
            "d": 0,
            "e": 0,
            "f": 0,
            "g": 0,
            "h": 0,
            "i": 0,
            "j": 0,
            "k": 0,
            "l": 0,
            "m": 0,
            "n": 0,
            "o": 0,
            "p": 0,
            "q": 0,
            "r": 0,
            "s": 0,
            "t": 0,
            "u": 0,
            "v": 0,
            "w": 0,
            "x": 0,
            "y": 0,
            "z": 0
        }
}

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(words) {
    if (!words.length) return [['']];
    
    const map = {};
    
    for (const word of words) {
        const hashedWord = hashWord(word);
        if (hashedWord in map) {
            map[hashedWord].push(word);
        } else {
            map[hashedWord] = [word];
        }
    }
    
    return Object.values(map);
};

function hashWord(word) {
    const hashedWord = createLetters();
    for (const char of word) {
        hashedWord[char] += 1;
    }
    
    return Object.values(hashedWord).toString();
}

/*

CLASS letters
    create an object with all letters as properties with a value of 0 per letter.
    returns the above as an object.

FUNC groupAnagrams
    if words doesn't contain anything return [['']]

    create map with an empty object

    itereate over each word in words
        hash the current word
        if map contains the hashed word
            push the current word into the location
        otherwise
            initialize the hash location with an array containing the current word.

    return an array of ALL the arrays within map.
    
FUNC hashWord
    create hashedWord with a letters object 
    iterate over each character in word
        increment the value of character in hashedWord by 1
        
    return hashedWord converting it to a string separated by commas per number

*/

/*
in:
    - (array) - array of strings
out:
    - (array) - array of subarrays of strings
cons:
    - the input array consists of lowercase letters
edge:
    - if there is are no strings in input, return an empty set.
*/