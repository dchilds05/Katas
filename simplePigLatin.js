/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str){
    let arr = str.split(" ");
    let newStr = "";
    arr.forEach((el) => {
      if (el==="!" || el==="." || el==="?") newStr+=`${el}`;
      else {
        for(let i=1; i<el.length; i++){
          newStr+=`${el[i]}`
        }
        newStr+=`${el[0]}ay `
      }
    })
    return newStr.trim();
  }