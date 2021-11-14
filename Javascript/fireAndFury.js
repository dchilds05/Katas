/*
The President's phone is broken
He is not very happy.

The only letters still working are uppercase E, F, I, R, U, Y.

An angry tweet is sent to the department responsible for presidential phone maintenance.

Kata Task
Decipher the tweet by looking for words with known meanings.

FIRE = "You are fired!"
FURY = "I am furious."
If no known words are found, or unexpected letters are encountered, then it must be a "Fake tweet."

Notes
The tweet reads left-to-right.
Any letters not spelling words FIRE or FURY are just ignored
If multiple of the same words are found in a row then plural rules apply -
FIRE x 1 = "You are fired!"
FIRE x 2 = "You and you are fired!"
FIRE x 3 = "You and you and you are fired!"
etc...
FURY x 1 = "I am furious."
FURY x 2 = "I am really furious."
FURY x 3 = "I am really really furious."
etc...
Examples
ex1. FURYYYFIREYYFIRE = "I am furious. You and you are fired!"
ex2. FIREYYFURYYFURYYFURRYFIRE = "You are fired! I am really furious. You are fired!"
ex3. FYRYFIRUFIRUFURE = "Fake tweet."
*/

var fireAndFury = function(tweet) {
  
    // REMOVE EXCESS CHARACTERS, STORE DESIRED VALUES IN ARRAY
    let keyArr = [];
    for (let i = 0; i < tweet.length; i++){
      if(tweet[i] !== "E" && tweet[i] !== "F" && tweet[i] !== "I" && tweet[i] !== "R" && tweet[i] !== "U" && tweet[i] !== "Y") {
        return "Fake tweet.";
      }
      if(tweet[i] === "F" && tweet[i+1] === "I" && tweet[i+2] === "R" && tweet[i+3] === "E"){
        keyArr.push("FIRE");
        tweet = tweet.slice(i+3);
        i = 0;
      }
      if(tweet[i] === "F" && tweet[i+1] === "U" && tweet[i+2] === "R" && tweet[i+3] === "Y"){
        keyArr.push("FURY");
        tweet = tweet.slice(i+3);
        i = 0;
      }
    }

    // RETURN IF FAKE TWEET
    if(keyArr.length === 0) return "Fake tweet."

    // TEST FOR ARRAY LENGTH OF 1
    if(keyArr.length === 1 && keyArr[0] === "FIRE") return "You are fired!";
    if(keyArr.length === 1 && keyArr[0] === "FURY") return "I am furious.";
    
    // LOOP THROUGH ARRAY TO PRINT OUT DESIRED VALUES
    let res = "";
    for ( let i = 0; i < keyArr.length; i++){

      // CHECK FOR FIRST VALUE
      if(i === 0) {
        if(keyArr[i] === "FIRE" && keyArr[i+1] === "FURY") res += "You are fired! ";
        else if(keyArr[i] === "FIRE" && keyArr[i+1] === "FIRE") res += "You ";
        else if(keyArr[i] === "FURY" && keyArr[i+1] === "FURY") res += "I am ";
        else if(keyArr[i] === "FURY" && keyArr[i+1] === "FIRE") res += "I am furious. ";
      }

      // CHECK FOR LAST VALUE
      else if(i === keyArr.length-1){
        if(keyArr[i] === "FIRE" && keyArr[i-1] === "FIRE") res += "and you are fired!"
        else if(keyArr[i] === "FIRE" && keyArr[i-1] === "FURY") res += "You are fired!"
        else if(keyArr[i] === "FURY" && keyArr[i-1] === "FURY") res += "really furious."
        else if(keyArr[i] === "FURY" && keyArr[i-1] === "FIRE") res += "I am furious."
      }

      // ALL OTHER CASES
      else {
        if(keyArr[i-1] === "FIRE" && keyArr[i] === "FIRE" && keyArr[i+1] === "FIRE") res += "and you ";
        if(keyArr[i-1] === "FURY" && keyArr[i] === "FIRE" && keyArr[i+1] === "FIRE") res += "You ";
        if(keyArr[i-1] === "FIRE" && keyArr[i] === "FIRE" && keyArr[i+1] === "FURY") res += "and you are fired! ";
        if(keyArr[i-1] === "FURY" && keyArr[i] === "FIRE" && keyArr[i+1] === "FURY") res += "You are fired! ";
        if(keyArr[i-1] === "FURY" && keyArr[i] === "FURY" && keyArr[i+1] === "FURY") res += "really ";
        if(keyArr[i-1] === "FIRE" && keyArr[i] === "FURY" && keyArr[i+1] === "FURY") res += "I am ";
        if(keyArr[i-1] === "FURY" && keyArr[i] === "FURY" && keyArr[i+1] === "FIRE") res += "really furious. ";
        if(keyArr[i-1] === "FIRE" && keyArr[i] === "FURY" && keyArr[i+1] === "FIRE") res += "I am furious. ";
      }
    }
    
    return res;
  }