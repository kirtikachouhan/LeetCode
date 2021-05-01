"use strict";

// In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.
// Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.
// Example 1:
// Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
// Output: true
// Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
// Example 2:
// Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
// Output: false
// Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
// Example 3:
// Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
// Output: false
// Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function isAlienSorted(words, order) {
  var alpha = {};

  for (var i = 0; i < order.length; i++) {
    alpha[order[i]] = i;
  }

  for (var _i = 0; _i < words.length - 1; _i++) {
    var count = 0;

    while (count < words[_i].length) {
      if (count === words[_i + 1].length) {
        return false;
      }

      if (alpha[words[_i][count]] > alpha[words[_i + 1][count]]) {
        return false;
      }

      if (alpha[words[_i][count]] < alpha[words[_i + 1][count]]) {
        break;
      }

      count++;
    }
  }

  return true;
};