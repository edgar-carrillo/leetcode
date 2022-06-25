/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (!list1 && !list2) return list1;
    if (list1 && !list2) return list1;
    if (!list1 && list2) return list2;
    
    let current1 = list1;
    let current2 = list2;
    let mergedList;
    
    if (current1.val < current2.val) {
        mergedList = current1;
        current1 = current1.next;
    } else {
        mergedList = current2;
        current2 = current2.next;
    }
    
    let current = mergedList;
    
    while (current1 || current2) {
        if (!current2 || (current1 && current1.val < current2.val)) {
            current.next = current1;
            current = current.next;
            current1 = current1.next;
        } else {
            current.next = current2;
            current = current.next;
            current2 = current2.next;
        }
    }
    
    return mergedList;
};


/*

create current1 with head of list1
create current2 with head of list2
create value1 with value of current1
create value2 with value of current2
create mergedList

if value1 is less then value2
    mergedList equals current1
    current1 equals current1s next value
otherwise
    mergedList equals current2
    current2 equals current2s next value
    
create current with mergedList

traverse while current1 and current2 are valid
    create value1 with current1's value
    create value2 with current2's value
    
    if value1 is less then value2 OR if value2 is null
        have current point to current1
        current becomes currents next node
        have current1 become current1s next node
    otherwise
        have current point to current2
        current becomes currents next node
        current2 becomes current2s next node
        
return mergedList

*/

/*
in:
    (LL)
    (LL)
out:
    (LL)
cons:
    none
edge:
    - if either of the linked lists doesnt exist return the one that does exist
    - if neither LL exists return undefined
    
*/