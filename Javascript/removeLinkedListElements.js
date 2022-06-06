/*
Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

 

Example 1:


Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]
Example 2:

Input: head = [], val = 1
Output: []
Example 3:

Input: head = [7,7,7,7], val = 7
Output: []
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

var removeElements = function(head, val) {
    let newList = [];
    
    // CONVERT TO ARAY
    while(head){
        newList.push(head.val);
        head = head.next;
    }
    
    // REMOVE UNWANTED ELEMENTS
    for(let i = 0; i < newList.length; i++){
        if(newList[i] == val) {
            newList.splice(i,1);
            i--;
        }
    }
    
    // CONVERT TO LINKED LIST
    if(newList.length == 0){
        return null;
    }
    else{
        let start = new Node(newList[0]);
        let cur = start;
        for(let i = 1; i < newList.length; i++){
            let temp = new Node(newList[i]);
            start.add(temp);
            start = temp;
        }
        return cur;
    }
};

