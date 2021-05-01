"use strict";

// Given an integer array nums,
// return all the triplets[nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.
// Example 1:
//     Input: nums = [-1, 0, 1, 2, -1, -4]
// Output: [
//     [-1, -1, 2],
//     [-1, 0, 1]
// ]
var threeSum = function threeSum(nums) {
  if (nums.length < 3) {
    return [];
  } else {
    nums.sort(function (a, b) {
      return a - b;
    });
    var result = [];

    for (var i = 0; i < nums.length; i++) {
      var left = i + 1,
          right = nums.length - 1,
          temp_obj = void 0;

      if (i > 0 && nums[i] === nums[i - 1]) {
        continue;
      }

      while (left < right) {
        var sum = nums[i] + nums[left] + nums[right];

        if (sum === 0) {
          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }

          while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }

          result.push([nums[i], nums[left], nums[right]]);
        }

        if (sum >= 0) {
          right--;
        } else {
          left++;
        }
      }
    }

    return result;
  }
};