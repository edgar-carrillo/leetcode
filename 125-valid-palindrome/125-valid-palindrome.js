/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = removeNonASCIIChars(s);
    if (s.length === 0) return true;
    s = s.toLowerCase();
    let start;
    let end;
    
    for (let i = 0; i < s.length; i++) {
        start = s.charAt(i);
        end = s.charAt((s.length - 1) - i);
        if (start !== end) return false;
        if (i >= (s.length - 1) - i) break;
    }
    
    return true;
};

function removeNonASCIIChars(str) {
    let newStr = '';
    let ASCIICode;
    for (let i = 0; i < str.length; i++) {
        ASCIICode = str.charCodeAt(i);
        if (
            ASCIICode >= 48 && ASCIICode <= 57 ||
            ASCIICode >= 97 && ASCIICode <= 122 ||
            ASCIICode >= 65 && ASCIICode <= 90
        ) {
            newStr += str.charAt(i);
        }
    }
    return newStr;
}

/*
removeNonASCIIChars
    create newStr with an empty str
    iterate over each character within the input string
        create ASCIIcode with current characters ascii code
        if 
        ASCII code is greater then or equal to 48 & less than or equal to 57 OR
        ASCII code is greater than or equal to 97 & less than or equal to 122 OR
        ASCII code is greater than or equal to 65 & less than or equal to 90 OR
            append the character to newStr
    return newStr
*/

/*
isPalindrome
    init s with removeNonASCIIChars function passing in s into it.
    if s length is 0
        return true
    init s with it's lowercase version
    
    create start
    create end
    
    iterate through each character
        init start with character at 0 in char
        init end with character at (str length - 1) - i

        if start does NOT equal end
            return false

        if start is greater then or equal to end
            break out of loop
            
    return true
*/

/*
in:
    (string) - a phrase which COULD be a palindrome
out:
    - (boolean) - true if palindrome, false otherwise
cons:
    - input string consists of only ASCII characters
edge:
    - if the string length is 0 return true
    - if a string has non-alphanumeric characters
        Remove all non-alphanumeric characters.
        determine if the resulting string is a palindrome
    - if the string has uppercase letters
        convert them to lowercase letters
    - odd number of character palindromes
    - even number of character palindromes
Good to know's
    - alphanumeric characters are letters and numbers.
    - ASCII charCode 48 - 57 are numbers 0 - 9
    - ASCII charCode 97 - 122 are letters a - z
    - ASCII charCode 65 - 90 are letters A - Z
*/