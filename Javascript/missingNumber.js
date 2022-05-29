/*
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
*/

var missingNumber = function(nums) {
    let newNums = nums.sort((a,b) => a-b);
    
    if(newNums[0] != 0) return 0;
    
    for(let i = 1; i < newNums.length; i++){
        if(newNums[i] != newNums[i-1] + 1) return newNums[i] - 1;
    }
    
    return newNums[newNums.length-1] + 1;
};