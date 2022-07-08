

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
    if (s.length === 0 || s.length % 2 !== 0) return false;
    
    const closedBrackets = {
        ')': '(',
        '}': '{',
        ']': '[',
    };
    
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
        let currChar = s.charAt(i);
        if (closedBrackets[currChar]) {
            const poppedChar = stack.pop();
            if (closedBrackets[currChar] !== poppedChar) return false;
        } else {
            stack.push(currChar);
        }
    }
    
    return stack.length === 0;
};

/*
create object called openBrackets with
(
{
[
properties with values of  coensiding closing bracket
*/

/*
if there's an empty string or an odd number of characters in s
    return false
    
create stack with empty array

traverse through each character in s
    create currChar
    if the current character is an closedBrackets
        create popped with the popped character from stack
        if currChar in closedBrackets value is not poppedChar
            return false
    otherwise if the current character is in closingBracket
        push into stack
 
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