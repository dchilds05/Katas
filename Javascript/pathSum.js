/*
Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
A leaf is a node with no children.

Example 1:
Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true
Explanation: The root-to-leaf path with the target sum is shown.

Example 2:
Input: root = [1,2,3], targetSum = 5
Output: false
Explanation: There two root-to-leaf paths in the tree:
(1 --> 2): The sum is 3.
(1 --> 3): The sum is 4.
There is no root-to-leaf path with sum = 5.

Example 3:
Input: root = [], targetSum = 0
Output: false
Explanation: Since the tree is empty, there are no root-to-leaf paths.
*/

var hasPathSum = function(root, targetSum) {
    let sum = [0];

    if(root == null) return false;

    if(checkNode(root,targetSum,sum) == true) return true;

    return false;
};

function checkNode(node,targetSum,sum){
    
    // update sum and check for target within leaf node
    sum[0] += node.val;
    if(sum[0] == targetSum && !node.left && !node.right) return true;
    
    // check left node
    if(node.left){
        if(checkNode(node.left,targetSum,sum) == true) return true;
        sum[0] -= node.left.val;
    }
    
    // check right node
    if(node.right){
        if(checkNode(node.right,targetSum,sum) == true) return true;
        sum[0] -= node.right.val;
    }
}