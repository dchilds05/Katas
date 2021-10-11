/*
Given a matrix, find the cross (row and column) with the largest sum of elements. Return the sum.

[[1, 2, 3],
 [4, 5, 6],
 [7, 8, 9]]
 
largest cross is the last column, [3,6,9], with the last row, [7,8,9]. 

Sum of elements is 3 + 6 + 7 + 8 + 9 = 33

therefore largestCrossSum(matrix) = 33
NOTE: the shared element of the column and row should only be counted once.

The matrix may not be square. All elements will be positive integers.
*/

function largestCrossSum(matrix) {
    let curMax = 0;
    let rowLength = matrix[0].length
    
    // FOR EACH ROW
    for (let i = 0; i < matrix.length; i++){
      let hSum = 0;
      
      // ADD ROW SUM
      for(let x = 0; x < rowLength; x++){
        hSum += matrix[i][x];
      }
      
      // THEN COMPARE IT WITH EACH COLUMN SUM INDIVIDUALLY
      for(let x = 0; x < rowLength; x++){
        let vSum = 0;
        
        for(let j = 0; j < matrix.length; j++){
          vSum += matrix[j][x];
        }
        
        // COMPARE WITH CURRENT MAX AFTER SUBTRACTING THE VALUE AT INTERSECTION
        let crossSum = vSum + hSum  - matrix[i][x];
        if (crossSum > curMax) curMax = crossSum;
      }
    }
    return curMax;
}