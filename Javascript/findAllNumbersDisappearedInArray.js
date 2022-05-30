/*
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
Example 2:

Input: nums = [1,1]
Output: [2]
*/

var findDisappearedNumbers = function(nums) {
    let max = nums.length;
    nums.sort((a,b) => a-b);
    let absent = [];
    
    if(nums[0] != 1) {
        absent.push(1);
        nums.unshift(1);
    }
    
    for(let i = 0; i < max-1; i++){

        if(nums[i] == nums[i+1]){
            nums.splice(i,1);
            i--;
        }
        else if(nums[i] != nums[i+1] - 1){
            absent.push(nums[i] + 1);
            nums.splice(i+1,0,nums[i]+1);
        }
        
    }
    
    return absent;
};

console.log(findDisappearedNumbers([2,3]));