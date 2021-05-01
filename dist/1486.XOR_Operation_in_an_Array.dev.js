"use strict";

// Given an integer n and an integer start.
// Define an array nums where nums[i] = start + 2 * i(0 - indexed) and n == nums.length.
// Return the bitwise XOR of all elements of nums.
// Example 1:
//     Input: n = 5, start = 0
// Output: 8
// Explanation: Array nums is equal to[0, 2, 4, 6, 8] where(0 ^ 2 ^ 4 ^ 6 ^ 8) = 8.
// Where "^"
// corresponds to bitwise XOR operator.

/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function xorOperation(n, start) {
  var res = start,
      i = 1;

  while (i < n) {
    res = res ^ start + 2 * i;
    i += 1;
  }

  return res;
};