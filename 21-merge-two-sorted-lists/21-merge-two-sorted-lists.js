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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let LL3 = new ListNode(null, null);
    let current = LL3;
    
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        
        current = current.next;
    }
    
    current.next = list1 || list2;
    
    return LL3.next;
};


/*

create LL3 with a new ListNode
create current with LL3

while either list1 AND list2 are not null
    if list1s value is the SAME or less then list2s value
        current points to list1
        list1 becomes list1s next node

    otherwise
        current points to list2
        list2 becomes list2 next node


    current becomes currents next node

currents next value is list1 OR list2 (depending on which is not null)
    
return LL3
        
*/





/*

create list1Next with list1s next node
create list2Next with list2s next node

while either list1 or list2 are not null
    if list1s value is the same as list2s value
        list2 points to list1
        list2 becomes list2Next
        list2Next becomes list2 next node
        list1 becomes list1Next
        list1Next becomes list1s next node
    otherwise if list1s value is less then list2s value
        list1 points to list2
        list1 becomes list1Next
        list1Next becomes lists next node
    otherwise if list1s value is greater then list2s value
        list2 points to list1
        list2 becomes list2Next
        list2Next becomes list2 next node
        
*/

/*
in:
    - (head of LL1 (node)) - head of linked list 1
    - (head of lL2 (node)) - head of linked list 2
out:
    - (head of LL) - both linked lists merged together
cons:
    - sorted in non-decreasing order
edge:
    - if one head is null
        just return the remaining LL
        
    - if both heads are null
        return null
        
    - if the heads are equal
        
*/