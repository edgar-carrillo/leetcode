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
