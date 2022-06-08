/*
Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
Note that after backspacing an empty text, the text will continue empty.

Example 1:
Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".

Example 2:
Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".

Example 3:
Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".
*/

var backspaceCompare = function(s, t) {
    
    s = updateStr(s);
    t = updateStr(t);
    
    return stringsSame(s,t);
};

function updateStr(str){
    
    for(let i = 0; i < str.length; i++){
        if(str[i] == "#") {
            
            let beginning = "";
            if(i-2 !== undefined){
                beginning = str.slice(0,i-1);
            }    
        
            let end = "";
            if(i+1 !== undefined){
                end = str.slice(i+1,str.length);
            }
            
            str = beginning + end;
            
            i = -1;
        }
    }
    return str;
}

function stringsSame(str1,str2){
    
    if(str1.length != str2.length) return false;
    
    for(let i = 0; i < str1.length; i++){
        if(str1[i] != str2[i]) return false;
    }
    
    return true;
}