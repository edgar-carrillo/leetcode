const letters = {
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
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(words) {
    const map = {};
    
    while (words.length) {
        const word = words.pop();
        const hashedWord = hashWord(word);

        if (map[hashedWord]) {
            map[hashedWord].push(word);
        } else {
            map[hashedWord] = [word];
        }
    }
    
    return Object.values(map);
};

var hashWord = function(word) {
    lettersClone = { ...letters };
    
    for (const char of word) {
        lettersClone[char] += 1;
    }
    
    return Object.values(lettersClone).join(',');
}

/*

create an object containing all characters from the alphbet including an empty string character
    give each character a value of 0

create function groupAnagrams
    create map with an empty object
    
    WHILE there are still elements in words
        create word by popping a word from words array
        create hashedWord by invoking hashWord passing in word
        if map has property hashedWord
            push word into map at hashedWord location
        otherwise
            create an array containg word inside of property at hashed word in map
            
    return all the values within map within an array
        

create function hashWord
    create copy of letters
    iterate over each character in word
        increment value at letter in letters at currChar
        
    return all the values in letters copy, separting them by comma
*/

/*
in:
    - (array) - array of strings
out:
    - (array) - array of subarrays of strings, each subarray containing anagrams of each other.
cons:
    - consists only of lowercase english letters
edge:
    - empty string? return an array a subarray containing a empty string.
*/