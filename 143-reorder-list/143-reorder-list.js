/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (!head) return;
    
    let nodesArr = createNodesArr(head);
    let n = nodesArr.length - 1;
    let counter = 0;
    
    for (let i = 1; i < nodesArr.length; i++) {
        let node;
        
        if (i % 2 !== 0) {
            node = nodesArr[n - counter];
            counter += 1;
        } else {
            node = nodesArr[counter]
        }

        head.next = node;
        head = node;
    }
    
    head.next = null;
};

function createNodesArr(head) {
    const nodesArr = [];
    let current = head;
    while (current) {
        nodesArr.push(current);
        current = current.next;
    }
    
    return nodesArr;
}

/*
func createNodesArr
    create nodesArr
    create current
    while current is not null
        push current into nodesArr
        current becomes currents next node
        
    return nodesArr
*/

/*

create counter with 0
create n with nodesArr - 1
create nodesArr

iterate length times over the LL starting at 1
    create node
    if index is NOT divisible by 2
        node becomes node in nodesArr at n - counter
        head next is node
        increase counter by 1
    otherwise
        node becomes node in nodesArr at counter
        head next becomesnode
        
    head becomes node

*/


/*
in:
    - (ListNode) - head of singly linked list
out:
    - (none) - nothing is returning, the head is manipulated.
cons:
    - we can NOT manipulate values of the LL
    - we CAN manipulate the ORDER of LL
edge:
    if theres only a head in the LL
        return just the head.
*/