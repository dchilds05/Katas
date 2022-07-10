/*
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

Definition for singly-linked list.
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

Example 1:
Input: head = [1,1,2]
Output: [1,2]

Example 2:
Input: head = [1,1,2,3,3]
Output: [1,2,3]
*/

var deleteDuplicates = function(head) {
    
    if(head == null) return head;
    
    let visitedNodes = [head.val];
    checkNext(head, visitedNodes);
    
    return head;
};

function checkNext(node, visited){
    
    if(!node.next) return;
    
    if(visited.includes(node.next.val)){
        node.next = node.next.next;
        checkNext(node,visited);
    }
    
    else{
        visited.push(node.next.val);
        checkNext(node.next,visited);
    }
}