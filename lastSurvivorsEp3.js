/*
Given a list of strings (of letters and spaces), and a list of numbers:

Considering the list of strings as a 2D character array, the idea is to remove from each column, starting from bottom, as many letters as indicated in the list of numbers. Then return the remaining letters in any order as a string.

If there aren't enough letters, just remove those you can.
The strings in the list will all be of the same length.
The list of numbers will be of the same length as the strings in the list of strings.
Strings will contain only lowercase letters and spaces.
There can be duplicated letters and numbers.
Example for these inputs: ["abc", " ", " a "] and numbers [0,4,1]

"abc"        "ab "        "a  "
"   "        "   "        "   "
" a "   =>   "   "   =>   "   "
 041          030          020
So the output would be "a".
*/

function lastSurvivors(strs, nums) {
  
    //CREATE MATRIX
    let matrix = [];
    for (let i = 0; i < strs.length; i++){
      let newArr = [];
      for(let j = 0; j < strs[i].length; j++){
        newArr.push(strs[i][j]);
      }
      matrix.push(newArr);
    }
    
    //USE NUMS ARRAY TO REMOVE DESIRED CHARACTERS
    for (let i = 0; i < nums.length; i++){
      count = nums[i];
      for (let j = matrix.length-1; j >= 0; j--){
        if(count > 0 && matrix[j][i] !== " "){
          matrix[j][i] = " ";
          count--;
        }
      }
    }
    
    //RETURN NONBLANK CHARACERS FROM MATRIX
    let res = "";
    matrix.forEach(el => {
      res += `${el.join("").replace(/ /g,'')}`
    })
    return res;
  }