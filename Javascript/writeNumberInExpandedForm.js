/*
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
*/

function expandedForm(num) {
    let nString = num.toString();
    let newString="";
    for (let i=0; i<nString.length; i++){
      if(nString[i]!=="0"){
        newString += nString[i]
        for(let x=i+1; x<nString.length; x++){newString += "0";}
        if(i!==nString.length-1) newString += " + "
      }
    }
    if(newString[newString.length-1] === " ") return newString.slice(0, newString.length-3)
    else return newString
  }