// Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.
// It is guaranteed that the answer will fit in a 32-bit integer.
// A subarray is a contiguous subsequence of the array.
// Example 1:
// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:
// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let left=0, maxProd=nums[0];
    if(nums.length<2){
        return maxProd;
    }
    while(left<nums.length){
        let right=left+1, prod=nums[left];
     if(nums[right]>maxProd){
               maxProd=nums[right];
           }
       
    while(right<nums.length){
          prod *= nums[right];
           right++;
         if(prod>maxProd){
               maxProd=prod;
           }
        }
        
        left++;
    }
    return maxProd;
};