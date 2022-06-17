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

/*
create getLength func with head as param
    create current with head
    create length init with 0
    while current
        increment length by 1
        have current be current.next
    return length
*/


/*
if head doesnt exist return false
if the heads next value is null
    return true


create length init getLength passing in head
create halfLength be length divided by 2 rounded down

create firstHalf with an empty array
create current with head
declare isEven with true if length / 2 is even, false otherwise

iterate over linked list
    if i is less then halfLength
        push currents val into firstHalf
    otherwise if isEven is true OR isEven is NOT true and i is greater then halfLength
        create num with number popped from firstHalf
        if current val does NOT equal num
            return false
    have current be currents next node
            
return true



*/