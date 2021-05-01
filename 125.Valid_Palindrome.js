// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let result = s.replace(/[^0-9a-zA-Z]/g,'').toLowerCase();
   for(let i=0;i<result.length/2;i++){
       if(result[i].toLowerCase()!==result[result.length-1-i].toLowerCase()){
           return false;
       }
   }
         return true;

};

