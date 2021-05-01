// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.
// If target is not found in the array, return [-1, -1].
// Follow up: Could you write an algorithm with O(log n) runtime complexity?
// Example 1:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:
// Input: nums = [], target = 0
// Output: [-1,-1]
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let result={"first":-1,"second":-1};
    for(let i=0;i<nums.length;i++){
        if(nums[i]===target){
          if(result["first"]===-1){
              result["first"]=i;
          }
            else {
                  result["second"]=i;
            }
        }
        if(nums[nums.length-i-1]===target){
            if(result["second"]===-1){
              result["second"]=nums.length-i-1;
          }
            else {
                  result["first"]=nums.length-i-1;
            }
        }
    }
    return [result["first"],result["second"]];
    
};