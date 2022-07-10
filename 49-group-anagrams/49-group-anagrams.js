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
};
