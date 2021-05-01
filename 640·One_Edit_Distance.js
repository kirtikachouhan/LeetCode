// Given two strings S and T, determine if they are both one edit distance apart.
// One ediit distance means doing one of these operation:
// insert one character in any position of S
// delete one character in S
// change one character in S to other character
// Example
// Example 1:
// Input: s = "aDb", t = "adb"
// Output: true
// Example 2:
// Input: s = "ab", t = "ab"
// Output: false
// Explanation:
// s=t ,so they aren't one edit distance apart
var isOneEditDistance = function (s, t) {
  // write your code here

  // write your code here
  if (s === t) {
    return false;
  }
  let left = 0;
  while (left < s.length) {
    if (s[left] !== t[left] && s.length === t.length) {
      s = s.replace(s[left], t[left]);
      return s === t;
    }
    if (s[left] !== t[left] && s.length > t.length) {
      s = s.substr(0, left) + s.substr(left + 1);
      return s === t;
    }
    if (s.length < t.length) {
      if (s[left] !== t[left]) {
        s = s.replace(s[left], t[left] + s[left]);
        return s === t;
      } else if (left === s.length - 1) {
        s = s.replace(s[left], s[left] + t[left + 1]);
        return s === t;
      }
    }
    left++;
  }
};
