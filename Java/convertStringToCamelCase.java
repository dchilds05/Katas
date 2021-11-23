/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/

import java.lang.StringBuilder;
class Solution{

  static String toCamelCase(String s){

    for(int i = 0; i < s.length(); i++){
      
      if(s.charAt(i) == '-' || s.charAt(i) == '_'){
        String nextChar = String.valueOf(s.charAt(i+1));
        s = s.substring(0,i) + nextChar.toUpperCase() + s.substring(i+2);
      }
      
    }
    
    return s;
  }
}