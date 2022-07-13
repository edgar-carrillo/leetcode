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
