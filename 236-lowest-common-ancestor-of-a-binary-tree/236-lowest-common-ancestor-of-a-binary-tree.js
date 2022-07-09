/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}t
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root) return null;
    if (root.val === p.val || root.val === q.val) return root;
    
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    
    if (left && right) return root;
    if (left) return left;
    if (right) return right;
    return null;
};
/*

if root is not a thing
    return null

if root value is p's value or q's value
    return root

create left invoking lowestCommonAncestor in root left, p, q
create right invoking lowestCommonAncestor in root right, p, q

if left and right are nodes
    return root
otherwise if left is a node
    return left
otherwise if right is a node
    return right
*/

/*
in:
    (node) - root - the root node of a binary tree
    (node) - p - a descendent
    (node) - q - a descendent
out:
    (node) - lowest common ancestor, the lowest node that has p and q as decesndents.
cons:
    - values in node can be null or negative.
    - all node values are unique
    - p will not equal q
    - p and q WILL exist in the tree
edge:
*/