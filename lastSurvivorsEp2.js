/*
Substitute two equal letters by the next letter of the alphabet (two letters convert to one):

"aa" => "b", "bb" => "c", .. "zz" => "a".
The equal letters do not have to be adjacent.
Repeat this operation until there are no possible substitutions left.
Return a string.

Example:

let str = "zzzab"
    str = "azab"
    str = "bzb"
    str = "cz"
return "cz"
Notes
The order of letters in the result is not important.
The letters "zz" transform into "a".
There will only be lowercase letters.
*/

function lastSurvivors(str) {
  
    let alph = "abcdefghijklmnopqrstuvwxyza"
    let sortedArr = str.split("").sort();
    
    for(let i = 0; i < sortedArr.length; i++){
      let letter = sortedArr[i]
      
      if(sortedArr[i] === sortedArr[i+1]){
        sortedArr.splice(i, 2, alph[alph.indexOf(letter) + 1]);
        sortedArr.sort();
        i = -1;
      }
      
    }
    return sortedArr.join("");
  }