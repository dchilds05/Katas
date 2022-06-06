/*
Given the head of a singly linked list, return true if it is a palindrome.

Example 1:

Input: head = [1,2,2,1]
Output: true
Example 2:

Input: head = [1,2]
Output: false
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

function buildList(arr){
    if(arr.length == 0) return null;
    
    let head = new Node(arr[0]);
    let cur = head;

    for(let i = 1; i < arr.length; i++){
        let temp = new Node(arr[i]);
        cur.add(temp);
        cur = temp;
    }

    return head;
}

function isPalindrome(arr){
    let head = buildList(arr);
    let array = [];

    while(head){
        array.push(head.val);
        head = head.next;
    }
    
    let map = [];
    let j = array.length-1;
    for(let i = 0; i < array.length/2; i++){
        if(array[i] != array[j]) return false;
        j--;
    }
    return true;
}

console.log(isPalindrome([1,2,2,1]));
console.log(isPalindrome([1,2]));
console.log(isPalindrome([1,2,2,1,3,4,5,6,6,5,4,3,1,2,2,1]));
console.log(isPalindrome([1,2,2,1,2,2,1,4]));
console.log(isPalindrome([0]));