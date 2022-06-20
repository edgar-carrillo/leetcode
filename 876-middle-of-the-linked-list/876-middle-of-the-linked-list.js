/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var getLength = function(head) {
    let counter = 0;
    let current = head;
    while (current) {
        counter += 1;
        current = current.next;
    }
    return counter;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    if (!head) return undefined;
    
    let middleNode = head;
    if (!head.next) return middleNode;
    
    let length = getLength(head);
    
    let midpoint = length / 2;
    midpoint % 1 === 0 ? midpoint += 1 : midpoint = Math.ceil(midpoint);
    
    
    current = head;
    for (let i = 0; i < midpoint; i++) {
        if (i === midpoint - 1) middleNode = current;
        current = current.next;
    }
    
    return middleNode;
};

