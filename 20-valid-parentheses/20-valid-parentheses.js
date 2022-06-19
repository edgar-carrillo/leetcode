class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    
    push(val) {
        const newNode = new Node(val);
        
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }
        
        this.size += 1;
    }
    
    pop() {
        if (!this.first) return undefined;
        
        const removedNode = this.first;
        if (this.size === 1) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size -= 1;
        return removedNode.val;
    }
    
    empty() {
        return !this.first;
    }
}


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length <= 1) return false;
    
    const stack = new Stack();
    
    for (let i = 0; i < s.length; i++) {
        const currChar = s.charAt(i);
        
        switch(currChar) {
            case '(':
                stack.push(currChar);
                break;
            case '[':
                stack.push(currChar);
                break;
            case '{':
                stack.push(currChar);
                break;
            case '}':
                if (stack.empty() || stack.first.val !== '{') {
                    return false;
                } else {
                    stack.pop();
                }
                break;
            case ')':
                console.log(stack);
                if (stack.empty() || stack.first.val !== '(') {
                    return false;
                } else {
                    stack.pop();
                }
                break;
            case ']':
                if (stack.empty() || stack.first.val !== '[') {
                    return false;
                } else {
                    stack.pop();
                }
                break;
        }
    }
    
    return !stack.first;
};
