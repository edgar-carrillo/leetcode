const ALPHA_NUM = /^[a-zA-Z0-9]$/;


/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {

    let l = 0;
    let r = s.length - 1;

    while(l < r){
        while(l < r && !ALPHA_NUM.test(s[l])){
            l++;
        }
        while(l < r && !ALPHA_NUM.test(s[r])){
            r--;
        }

        if(s[l].toLowerCase() !== s[r].toLowerCase()) {
            return false;
        }

        l++;
        r--;
    }

    return true;
}

/*
create left with a pointer at far left side of string
create right wiuth a pointer at far right side of string

while left is smaller then right
    create char1 
    create char2 
    
    if char1 is not a character
        increment left by 1
        continue
        
    if char2 is not a character
        decrement char2 by 1
        continue
        
    make char1 lowercase
    make char2 lowercase
    
    if char1 does NOT equal char2
        return false
    
    increment left by 1
    decrement right by 1
        
return true

*/