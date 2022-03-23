/*
You are given an array of strings arr. A string s is formed by the concatenation of a subsequence of arr that has unique characters.

Return the maximum possible length of s.

A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

 

Example 1:

Input: arr = ["un","iq","ue"]
Output: 4
Explanation: All the valid concatenations are:
- ""
- "un"
- "iq"
- "ue"
- "uniq" ("un" + "iq")
- "ique" ("iq" + "ue")
Maximum length is 4.
Example 2:

Input: arr = ["cha","r","act","ers"]
Output: 6
Explanation: Possible longest valid concatenations are "chaers" ("cha" + "ers") and "acters" ("act" + "ers").
Example 3:

Input: arr = ["abcdefghijklmnopqrstuvwxyz"]
Output: 26
Explanation: The only string in arr has all 26 characters.
*/

var maxLength = function(arr) {
    if(arr.length === 0) return 0;
    
    let finalWord = "";
    arr.sort((a,b) => b.length - a.length);
    
    for(i = 0; i < arr.length; i++){
        let currentWord = arr[i];
        for(j = 0; j < currentWord.length; j++){
            let currentLetter = currentWord[j];
            if(currentWord.includes(currentLetter,j+1)) break;
            if(finalWord.includes(currentLetter)) break; 
            if(j === currentWord.length-1){
                    finalWord += currentWord;
                } 
        }
    }
    return finalWord.length;
};