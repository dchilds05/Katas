/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/

var twoSum = function(nums, target) {
    let resVals = [];
    let map = {};
    
    // Create a map of indices before sorting
    for(let i = 0; i < nums.length; i++){
        map[i] = nums[i];
    }
    
    nums.sort((a,b) => a-b);
    
    // Iterate from both ends until pair is found, store values
    let j = nums.length-1;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] + nums[j] == target){
            resVals = [nums[i], nums[j]];
            break;
        }
        if(nums[i] + nums[j] > target){
            j--;
            i--;
        }
    }
    
    // Locate two values in map (had to be done this way instead of having the indices be the values in the case of a matching pair e.g. 3 + 3 = 6)
    let resIndices = [];
    Object.keys(map).forEach((el) => {
        if(map[el] == resVals[0] || map[el] == resVals[1]) resIndices.push(el);
    })
    
    return resIndices;
};