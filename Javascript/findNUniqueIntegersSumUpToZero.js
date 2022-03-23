/*
Given an integer n, return any array containing n unique integers such that they add up to 0.

Example 1:

Input: n = 5
Output: [-7,-1,1,3,4]
Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].

Example 2:

Input: n = 3
Output: [-1,0,1]

Example 3:

Input: n = 1
Output: [0]

*/

var sumZero = function(n) {
    let res = [];
    let num = n;
    
    // IN CASE N IS ODD, USE 0 TO BALANCE AVG
    if(n % 2 !== 0) {
        res.push(0);
        num--;
    }
    
    // ALTERNATE BETWEEN ADDING POS AND NEG INTEGERS, N TIMES
    let numToPush = 1;
    for(i = 0; i < num; i++){
        res.push(numToPush);
        if(i % 2 === 0) numToPush -= (i+2);
        else numToPush += (i+2);
    }
    
    return res;
};