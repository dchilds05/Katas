/*
Given a string of letters a, b, n how many different ways can you make the word "banana" by crossing out various letters and then reading left-to-right?

(Use - to indicate a crossed-out letter)

Example
Input

bbananana
Output

b-anana--
b-anan--a
b-ana--na
b-an--ana
b-a--nana
b---anana
-banana--
-banan--a
-bana--na
-ban--ana
-ba--nana
-b--anana
Notes
You must return all possible bananas, but the order does not matter
The example output above is formatted for readability. Please refer to the example tests for expected format of your result.
*/

var bananas = function(str) {
    let results = [];
    let bananaStr = "banana";
    let sCopy = str;
  
    console.log("str",str,"\n");

    // LOOP THROUGH WORD, REMOVING ONELETTER AT A TIME AND REPLACING WITH DASH
    for(let x = -1; x < sCopy.length; x++){
      console.log("x:",x);
        if(x > -1) {
          sCopy = sCopy.split("");
          sCopy.splice(x,1,"-");
          sCopy = sCopy.join("");
        }
        console.log("sCopy:",sCopy,"\n");
        let tempStr = "";
        let bananaIndex = 0;
        
        // DURING EACH ITERATION, LOOP THROUGH THE WORD TO CHECK FOR "BANANA"
        for(let i = 0; i < sCopy.length; i++){

          if(sCopy[i] === bananaStr[bananaIndex]){
              tempStr += sCopy[i];
              bananaIndex++;
          }
          else tempStr += "-";

        // ONCE YOU HAVE A FULL "BANANA", PUSH THIS INTO THERESULTS ARRAY
          if(bananaIndex === 6){
              if(sCopy.length-tempStr.length > 0) for(let i = 0; i <= sCopy.length-tempStr.length; i++) tempStr += "-";
              if(!results.includes(tempStr)) results.push(tempStr);
              bananaIndex = 0;
              tempStr = "";
              console.log("pushed into results:",results,"\n");
              break;
          }
        }
      
      // RESET sCOPY TO STR  
      sCopy = str;
    }
  console.log("results:",results,"\n");
    return results;
  }