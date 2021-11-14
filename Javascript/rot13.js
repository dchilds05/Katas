/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/

function rot13(message){
    let str = "";
    let rot = 13;
    let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    for(let i=0; i<message.length; i++){
      if(!alphabet.includes(message[i].toLowerCase())) str+=message[i]
      else{
        for(let j=0; j<alphabet.length; j++){
          if(alphabet[j]===message[i].toLowerCase()){
            if(message[i] === message[i].toLowerCase() && j<13) str+=alphabet[j+rot]
            else if(message[i] === message[i].toLowerCase() && j>=13) str+=alphabet[j-rot]
            else if(message[i] === message[i].toUpperCase() && j<13) str+=alphabet[j+rot].toUpperCase()
            else if(message[i] === message[i].toUpperCase() && j>=13) str+=alphabet[j-rot].toUpperCase()
          }
        }
      }
    }
    return str;
  }