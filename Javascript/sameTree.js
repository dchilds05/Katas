/*
Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

Example 1:
Input: p = [1,2,3], q = [1,2,3]
Output: true
Example 2:

Example 2:
Input: p = [1,2], q = [1,null,2]
Output: false
Example 3:

Example 3:
Input: p = [1,2,1], q = [1,1,2]
Output: false
*/

var isSameTree = function(p, q) {
    if(p == null && q == null) return true;
    if(checkNodes(p,q) == false) return false;
    return true;
};

function checkNodes(p,q){

    if(p == null || q == null) return false;
    if(p.val != q.val) return false;

    if(p.left || q.left) {
        if(checkNodes(p.left,q.left) == false) return false;
    }
    
    if(p.right || q.right) {
        if(checkNodes(p.right,q.right) == false) return false;
    }
}