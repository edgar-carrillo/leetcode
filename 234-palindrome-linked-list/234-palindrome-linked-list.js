/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var getLength = function(head) {
    let current = head;
    let length = 0;
    while (current) {
        length += 1;
        current = current.next;
    }
    return length;
}

var isPalindrome = function(head) {
    if (!head) return false;
    if (!head.next) return true;
    
    
    let length = getLength(head);
    
    const firstHalf = [];
    const halfLength = Math.floor(length / 2);
    const isEven = length % 2 === 0;
    let current = head;

    for (let i = 0; i < length; i++) {
        if (i < halfLength) {
            firstHalf.push(current.val);
        } else if (isEven || (!isEven && i > halfLength)) {
            const num = firstHalf.pop();
            if (current.val !== num) return false;
        }
        current = current.next;
    }

    return true;
};