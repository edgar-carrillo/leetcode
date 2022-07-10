class Node {
    constructor(str) {
        this.length = str.length;
        this.charsObj = str.split('').reduce((prev, curr) => {
            prev[curr] = (prev[curr] || 0) + 1;
            return prev;
        }, {});
        this.arrayOfStrs = [str];
        this.next = null;
    }
    
    hasSameChars(str) {
        if (str.length !== this.length) return false;
        let strObj = str.split('').reduce((prev, curr) => {
            prev[curr] = (prev[curr] || 0) + 1;
            return prev;
        }, {});
        let hasSameChars = true;
        for (const key in this.charsObj) {
            if (this.charsObj[key] !== strObj[key]) {
                hasSameChars = false;
                break;
            }
        }
        return hasSameChars;
        /*
        if strings length is not the same as nodes length
            return false
            
        create obj with each character from str
        create hasSame with true
        iterate over each property in obj
            if obj does NOT have the same value as charsObj at property
                hasSame becomes false
                break out of loop
        return hasSame
        */
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null
    }
    
    push(str) {
        const node = new Node(str);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }
}

function addToLL(LL, str) {
    let current = LL.head;
    let found = false;
    
    while (current && !found) {
        let hasSameChars = current.hasSameChars(str);
        if (hasSameChars) {
            found = true
            current.arrayOfStrs.push(str);
            return;
        };
        current = current.next;
    }
    
    LL.push(str);
}


function getStrArrays(head) {
    let result = [];
    let current = head;
    while (current) {
        result.push(current.arrayOfStrs);
        current = current.next;
    }
    return result;
}

/*

create addToLL - head, string
    create current
    create found with value false
    
    while current is not null OR found is false
        if currents length equals strs length
            iterate over each character in str
                if the character is not in the current nodes charsObj
                    break out of for loop
                if we reached the last character
                    mark found as true
        have current be currents next node
        
    if found is false
        create node and push it to LinkedList
    
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if (!strs.length) return [[]];
    
    let currStr = strs.pop();
    let linkedList = new LinkedList();
    linkedList.push(currStr);
    
    let current;
    while (strs.length) {
        currStr = strs.pop();
        addToLL(linkedList, currStr);
    }
    
    return getStrArrays(linkedList.head);
    
    /*

if strs has no elements return [[]]

get the popped string from strs 

create LinkedListNode with popped string from strs

while there are still elements in strs
    have current string be the popped string from strs
    traverse through LinkedListNode by invoking addToLL
    
return the array of string arrays from LL

*/
};

/*
in:
    (array) - array of strings
out:
    - (array) - array of subarrays
cons:
    - the input array of strings consists of only lowercase english letters
edge:
    - if the string is an empty string, it will be considered an anagram of an empty
    - if we're given an empty inpupt array
        return an array with an empty subarray ([[]])
*/

/*

create class Node
    create charsObj creates an object with each character within input string
    create arrayOfChars with an array that holds the input string
    create next with null

-------

create class LinkedList
    create head
    create tail
    
create push
    create node with str

    if theres no head
        head becomes node
        tail becomes node
    otherwise
        tails next becomes node
        tail becomes node
        
*/

/*

create getStringArrays
    
*/

/*

create addToLL - head, string
    create current
    create found with value false
    
    while current is not null OR found is false
        if currents length equals strs length
            iterate over each character in str
                if the character is not in the current nodes charsObj
                    break out of for loop
                if we reached the last character
                    mark found as true
        have current be currents next node
        
    if found is false
        create node and push it to LinkedList
    
*/

/*

if strs has no elements return [[]]

get the popped string from strs 

create LinkedListNode with popped string from strs

while there are still elements in strs
    have current string be the popped string from strs
    traverse through LinkedListNode by invoking addToLL
    
        

return the array of string arrays from LL

*/