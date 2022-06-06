/*
Given head, the head of a linked list, determine if the linked list has a cycle in it.
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
Return true if there is a cycle in the linked list. Otherwise, return false.

Example 1:

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
Example 2:

Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
Example 3:

Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
*/

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }

    add(node){
        this.next = node;
    }
}

function hasCycle(listVals, pos){
    if(listVals.length == 0) return false;

    let head = new Node(listVals[0]);
    let cur = head;
    let posNode = null;

    for(let i = 1; i < listVals.length; i++){
        let temp = new Node(listVals[i]);
        cur.add(temp);
        cur = temp;
        if(i == pos) posNode = temp;
    }

    if(pos == 0){
        cur.add(head);
        return true;
    }

    else if(posNode){
        cur.add(posNode);
        return true;
    }

    return false;
}

console.log(hasCycle([3,2,0,-4],1));
console.log(hasCycle([1,2],0));
console.log(hasCycle([1],-1));

