"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.
// Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.Elements that don 't appear in arr2 should be placed at the end of arr1 in ascending order.
// Example 1:
//     Input: arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], arr2 = [2, 1, 4, 3, 9, 6]
// Output: [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19]

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function relativeSortArray(arr1, arr2) {
  var count = 0;

  for (var i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i], count) !== -1) {
      var ind = arr1.indexOf(arr2[i], count);

      if (ind !== count) {
        arr1[ind] = arr1[count];
        arr1[count] = arr2[i];
      }

      count++;
    }

    if (i === arr2.length - 1) {
      var temp = arr1.splice(count, arr1.length);
      temp.sort(function (a, b) {
        return a - b;
      });
      arr1.push.apply(arr1, _toConsumableArray(temp));
    }
  }

  return arr1;
};