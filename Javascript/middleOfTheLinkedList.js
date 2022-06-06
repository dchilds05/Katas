/*
Given the head of a singly linked list, return the middle node of the linked list.
If there are two middle nodes, return the second middle node.

Example 1:

Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
Example 2:

Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
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

function middleNode(arr){
    if(arr.length == 0) return null;

    let head = new Node(arr[0]);
    let cur = head;

    for(let i = 1; i < arr.length; i++){
        let temp = new Node(arr[i]);
        cur.add(temp);
        cur = temp;
    }

    let counter = 0;

    cur = head;
    while(cur){
        counter++;
        cur = cur.next;
    }

    cur = head;
    let half = counter/2;
    if(counter % 2 == 0) half = counter/2 + 1;

    for(let i = 1; i < half; i++){
        cur = cur.next;
    }

    return cur.val;
}

console.log(middleNode([1,2,3,4,5]));
console.log(middleNode([1,2,3,4,5,6]));