// A peak element is an element that is strictly greater than its neighbors.
// Given an integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.
// You may imagine that nums[-1] = nums[n] = -∞.
// Example 1:
// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.
// Example 2:
// Input: nums = [1,2,1,3,5,6,4]
// Output: 5
// Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let i=1,j=nums.length-1,maxEle=nums[0],maxIdx=0;
    while(i<=j){
       if(nums[i]>maxEle){
           maxEle = nums[i];
           maxIdx = i;
       } 
        if(nums[j]>maxEle){
           maxEle = nums[j];
           maxIdx = j;
       } 
        i++;
        j--;
    }
    return maxIdx;
};