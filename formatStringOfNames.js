/*
Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
*/

function list(names){
    let st = "";
    let length=names.length
    names.forEach((el) => {
      if(el!==names[length-1] && el!==names[length-2]) st+=`${el.name}, `;
      else st+=`${el.name} `;
      if(length>1 && el===names[length-2]) st+="& ";
    })
    return st.trim();
  }