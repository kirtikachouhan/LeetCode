"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// Given an array of integers arr, replace each element with its rank.
// The rank represents how large the element is.The rank has the following rules:
//     Rank is an integer starting from 1.
// The larger the element, the larger the rank.If two elements are equal, their rank must be the same.
// Rank should be as small as possible.
// Example 1:
//     Input: arr = [40, 10, 20, 30]
// Output: [4, 1, 2, 3]
// Explanation: 40 is the largest element .10 is the smallest .20 is the second smallest .30 is the third smallest.

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function arrayRankTransform(arr) {
  // let rank = new Map([...new Set(arr)].sort((a, b) => a - b).map((item, index) => [item, index + 1]));
  var resArr = new Set(_toConsumableArray(arr));
  resArr = _toConsumableArray(resArr).sort(function (a, b) {
    return a - b;
  });
  resArr = new Map(resArr.map(function (item, idx) {
    return [item, idx + 1];
  }));
  return arr.map(function (item) {
    return resArr.get(item);
  });
};