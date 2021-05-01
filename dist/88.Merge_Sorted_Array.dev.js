"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
// The number of elements initialized in nums1 and nums2 are m and n respectively.You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.
// Example 1:
//     Input: nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
// Output: [1, 2, 2, 3, 5, 6]
// Example 2:
//     Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function merge(nums1, m, nums2, n) {
  nums1.splice(m);
  nums2.splice(n);
  nums1.push.apply(nums1, _toConsumableArray(nums2));
  nums1.sort(function (a, b) {
    return a - b;
  });
};