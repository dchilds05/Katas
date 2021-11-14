/*
You have an 8x8 grid with coordinates ranging from 1 to 8. The origin (1, 1) is in the top left corner. The bottom right corner is (8, 8).

You are given a string as an input which will contain the 2 coordinates in this format: "(x1 y1)(x2 y2)", where (x1 y1) represents point A and (x2 y2) represents point B. In the inputs provided, point A will always be up and to the left of point B. In other words, x1 < x2 and y1 < y2 will be true for every input.

Your goal is to find out the number of different paths you can take to get from point A to point B by moving one cell at a time either down or right.

Example
Given an input of "(2 3)(3 5)", the number of possible paths to get from A to B is 3.

 .  .  .  .  .  .  .  .
 .  .  .  .  .  .  .  .
 .  A  .  .  .  .  .  .
 .  .  .  .  .  .  .  .
 .  .  B  .  .  .  .  .
 .  .  .  .  .  .  .  .
 .  .  .  .  .  .  .  .
 .  .  .  .  .  .  .  .
Possible paths, marked with x:

A .       A .       A x
x .       x x       . x
x B       . B       . B
*/

function travelChessboard(s){
    // CREATE MATRIX
    let matrix = [
      [0,1,1,1,1,1,1,1],
                 ]
    let tempArr = [1]
    
    for(let x = 0; x < 7; x++){
      
      for(let i = 0; i < 7; i++){
        tempArr.push(tempArr[i] + matrix[x][i+1])
      }
      
      matrix.push(tempArr);
      tempArr = [1];
    }
    
    // FIND VALUE IN MATRIX USING X AND Y VALUES
    let x1 = Number(s[1]);
    let y1 = Number(s[3]);
    let x2 = Number(s[6]);
    let y2 = Number(s[8]);
    
    let xDistance = x2-x1;
    let yDistance = y2-y1;
    
    return matrix[xDistance][yDistance];
  }