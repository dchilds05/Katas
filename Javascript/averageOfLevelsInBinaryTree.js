/*
Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.
 
Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [3.00000,14.50000,11.00000]
Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
Hence return [3, 14.5, 11].

Example 2:
Input: root = [3,9,20,15,7]
Output: [3.00000,14.50000,11.00000]
*/

var averageOfLevels = function(root) {
    let level = [1];
    let valsByLevel = {};
    
    if(root == null) return null;
    
    checkNode(root, level, valsByLevel);
    
    let valsArr = Object.values(valsByLevel);
    let avgArr = [];
    
    valsArr.forEach((el) => {
        avgArr.push(el.reduce((a,b) => a+b, 0) / el.length)
    })
    
    return avgArr;
};

function checkNode(node, level, valsByLevel){
    if(!valsByLevel[level[0]]) valsByLevel[level[0]] = [];
    valsByLevel[level[0]].push(node.val);
    
    if(node.left){
        level[0]++;
        checkNode(node.left, level, valsByLevel);
        level[0]--;
    }
    
    if(node.right){
        level[0]++;
        checkNode(node.right, level, valsByLevel);
        level[0]--;
    }
}