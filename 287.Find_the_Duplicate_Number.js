// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
// There is only one repeated number in nums, return this repeated number.
// Example 1:
// Input: nums = [1,3,4,2,2]
// Output: 2
// Example 2:
// Input: nums = [3,1,3,4,2]
// Output: 3
// Example 3:
// Input: nums = [1,1]
// Output: 1
// Example 4:
// Input: nums = [1,1,2]
// Output: 1
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    nums.sort((a,b)=>a-b);
    let i=0,j=nums.length-1;
    while(i<=j){
        if(nums[i]===nums[i+1]){
            return nums[i];
        }
        if(nums[j]===nums[j-1]){
            return nums[j];
        }
        i++;
        j--
    }
};