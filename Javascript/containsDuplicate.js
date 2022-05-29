/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*/

var containsDuplicate = function(nums) {
    let map = {};
    for(let i = 0; i < nums.length; i++){
        if(!map[nums[i]]) map[nums[i]] = 1;
        else return true;
    }
    return false;
};