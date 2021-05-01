"use strict";

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function productExceptSelf(nums) {
  var i = 0,
      prod = 1,
      zeroProd = false; // check case for one zero
  //check case for two zero
  //Math.pow with negative number is opposite of positive number
  //like 2pow(2) is 4 2pow(-2) is 0.25
  //Math.pow(0,-1) is Infinite, Math.pow(0,2) is 0

  while (i < nums.length) {
    if (nums[i] !== 0 || zeroProd) {
      prod = prod * nums[i];
    } else {
      zeroProd = true;
    }

    i++;
  }

  i = 0;

  while (i < nums.length) {
    if (zeroProd) {
      if (nums[i] === 0) {
        nums[i] = prod;
      } else {
        nums[i] = 0;
      }
    } else {
      nums[i] = prod * Math.pow(nums[i], -1);
    }

    i++;
  }

  return nums;
};