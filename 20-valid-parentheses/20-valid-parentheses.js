const openBrackets = {
    '(': 1,
    '{': 1,
    '[': 1,
};

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
    if (s.length === 0 || s.length % 2 !== 0) return false;
    
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
        let currChar = s.charAt(i);
        if (openBrackets[currChar]) {
            stack.push(currChar);
        } else {
            const poppedChar = stack.pop();
            if (poppedChar === undefined) return false;
            if (poppedChar === '{' && currChar !== '}') return false;
            if (poppedChar === '[' && currChar !== ']') return false;
            if (poppedChar === '(' && currChar !== ')') return false;
        }
    }
    
    return stack.length === 0
};

/*
create object called openBrackets with
(
{
[
properties with values of 1
*/

/*
if there's an empty string or an odd number of characters in s
    return false
    
create stack with empty array

traverse through each character in s
    create current character
    if the current character is an openingBracket
        push into stack
    otherwise if the current character is in closingBracket
        create popped with the popped character from stack
        if popped is undefined
            return false
        if currentcharacter is } and popped character is NOT { 
            return false
        if currentcharacter is ] and popped character is NOT [ 
            return false
        if currentcharacter is ) and popped character is NOT ( 
            return false
            
if stack has elements
    return false
otherwise
    return true
*/


/*
in:
    - (string) - a string of '(', ')', '{', '}', '[', ']'
out:
    - (boolean) - true if input is valid or false otherwise.
cons:
    - s consists of parentheses only '()[]{}'.
edge:
    - if empty string
        return false
    - if there's a odd number of characters 
        return false

*/