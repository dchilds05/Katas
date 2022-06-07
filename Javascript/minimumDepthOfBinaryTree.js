/*
Given a binary tree, find its minimum depth.
The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: 2
Example 2:

Input: root = [2,null,3,null,4,null,5,null,6]
Output: 5
*/

var minDepth = function(root) {
    let counter = {count:1};
    let counterList = [];
    if(root == null) return null;
    checkNode(root, counter, counterList);
    return counterList.sort((a,b) => a-b)[0];
};

function checkNode(root, counter, counterList){
    if(root.left == null && root.right == null) {
        counterList.push(counter.count);
        counter.count--;
        return;
    }
    
    if(root.left){
        counter.count++;
        checkNode(root.left, counter, counterList);
    }
        
    if(root.right){
        counter.count++;
        checkNode(root.right, counter, counterList);
    }
    
    counter.count--;
}

