const openingBrackets = {
    '(': ')',
    '{': '}',
    '[': ']'
};


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length === 0 || s.length % 2 !== 0) return false;
    
    const stack = [];
    
    for (const currChar of s) {
        if (openingBrackets[currChar]) {
            stack.push(currChar);
        } else {
            const potentialValidOpeningBracket = stack.pop();
            if (openingBrackets[potentialValidOpeningBracket] !== currChar) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
};

/*

create an object called openingBrackets with

    opening bracket as key and closing bracket as value for each.

if the string is empty or we have an odd number of characters in str
    return false
    
create stack with an empty array
    
iterate over each character in string.
    create currentCharacter with current character in string
    if current character is an opening bracket
        add it to stack
    otherwise
        create potentialValidOpeningBracket with popped element from stack
        if potentialValidOpeningBracket in openiningBrackets value does NOT equal currentCharacter
            return false
            
return true
            
    

*/


/*
in:
    - (string) - string of specific characters
out:
    - (boolean) - true if string is valid, false otherwise
cons:
    - string will only consist of '()[]{}'
edge:
    - if the string is empty return false
    - if an odd number of characters, return false.
*/