/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']
*/

function solution(str){
    let newArr = [];
    for(let i=0; i<str.length; i++){
      if(str.length>=2) {
        newArr.push(`${str[0]}${str[1]}`);
        str = str.slice(2,str.length);
        i=-1
      }
      else newArr.push(`${str[0]}_`);
    }
    return newArr;
  }