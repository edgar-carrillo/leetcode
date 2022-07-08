/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        while (!isAlphaNum(s.charAt(left)) && left < right) {
            left += 1;
        }
        while (!isAlphaNum(s.charAt(right)) && left < right) {
            right -= 1;
        }
        
        if (s.charAt(left).toLowerCase() !== s.charAt(right).toLowerCase()) {
            return false;
        }
        
        left += 1;
        right -= 1;
    }
    
    return true;
};

function isAlphaNum(char) {
    ASCIICode = char.charCodeAt(0);
    const isValidAlphaNum =
          ASCIICode >= 48 && ASCIICode <= 57 ||
          ASCIICode >= 97 && ASCIICode <= 122 ||
          ASCIICode >= 65 && ASCIICode <= 90;
    return isValidAlphaNum
}

/*
isAlphaNum
    create ASCIIcode with current characters ascii code
    if 
        ASCII code is greater then or equal to 48 & less than or equal to 57 OR
        ASCII code is greater than or equal to 97 & less than or equal to 122 OR
        ASCII code is greater than or equal to 65 & less than or equal to 90 OR
            return true
    return false
*/

/*
isPalindrome


    create left is 0
    create right is s's length - 1
    
    while left is less then right
    
        while left character is not an ASCII char AND left is less then right
            increase left by 1
            
        while right character is NOT an ascii char AND left is less then right
            increase right by 1
        
        if the lowercase version left char is NOT equal to the lowercase version of right char
            return false
            
        increase left by 1
        decrease right by 1
            
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