"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// Given an array of string words.Return all strings in words which is substring of another word in any order.
// String words[i] is substring of words[j],
//     if can be obtained removing some characters to left and / or right side of words[j].
// Example 1:
//     Input: words = ["mass", "as", "hero", "superhero"]
// Output: ["as", "hero"]
// Explanation: "as"
// is substring of "mass"
// and "hero"
// is substring of "superhero".
//     ["hero", "as"] is also a valid answer.

/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function stringMatching(words) {
  var i = 0,
      j = 1,
      res = new Set();

  while (i < words.length - 1) {
    if (words[i].includes(words[j])) {
      res.add(words[j]);
    } else if (words[j].includes(words[i])) {
      res.add(words[i]);
    }

    j = j + 1;

    if (j >= words.length) {
      i = i + 1;
      j = i + 1;
    }
  }

  return _toConsumableArray(res);
};