/*
Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example 1:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true

Example 2:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true

Example 3:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
*/

let visitedNodes = [];
let tempString = "";

var exist = function(board, word) {
    // Make sure all of the letters in word exist in matrix
    for(let i = 0; i < word.length; i++){
        if(!JSON.stringify(board).includes(word[i])) return false;
    }
    
    if(board == null || word == null) return false;
    for(let y = 0; y < board.length; y++){
        for(let x = 0; x < board[0].length; x++){
            visitedNodes = [];
            tempString = "";
            if(checkNode(y,x,board,word) == true) return true;
        }
    }
    return false;
};

function checkNode(y,x,board,word){
    
    console.log(tempString);
    tempString += board[y][x];
    console.log(tempString);
    if(tempString == word) return true;
    visitedNodes.push([y,x]);

    for(let i = 0; i < tempString.length; i++){
        if(tempString[i] != word[i]) return false;
    }
    
    // check right
    if(board[0][x+1] && !contains(visitedNodes,[y,x+1])){
        if(checkNode(y,x+1,board,word) == true) return true;
        visitedNodes.pop();
        tempString = tempString.slice(0,-1);
    }
    
    // check down
    if(board[y+1] && board[y+1] && !contains(visitedNodes,[y+1,x])){
        if(checkNode(y+1,x,board,word) == true) return true;
        visitedNodes.pop();
        tempString = tempString.slice(0,-1);
    }
    
    // check left
    if(board[0][x-1] && !contains(visitedNodes,[y,x-1])){
        if(checkNode(y,x-1,board,word) == true) return true;
        visitedNodes.pop();
        tempString = tempString.slice(0,-1);
    }
    
    // check up
    if(board[y-1] && board[y-1][x] && !contains(visitedNodes,[y-1,x])){
        if(checkNode(y-1,x,board,word) == true) return true;
        visitedNodes.pop();
        tempString = tempString.slice(0,-1);
    }
}

function contains(bigArr,smArr){
    
    let str = JSON.stringify(smArr);
    let flag = false;

    for(let i = 0; i < bigArr.length; i++){
        if(JSON.stringify(bigArr[i]).replace(/\s/g, '') == str) {
            flag = true;
            break;
        }
    }
    
    return flag;
}