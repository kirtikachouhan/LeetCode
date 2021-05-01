// Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.
// Example 1:
// Input: "aba"
// Output: True
// Example 2:
// Input: "abca"
// Output: True
// Explanation: You could delete the character 'c'.
// Note:
// The string will only contain lowercase characters a-z. The maximum length of the string is 50000.
/**
 * @param {string} s
 * @param {number} p1
 * @param {number} p2
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let left=0,
        right=s.length-1;
    while(left<right){
        if(s[left]!==s[right]){
            return isPal(s,left+1,right)||isPal(s,left,right-1);
        }
          left++;
       right--;
    }
    return true;
};

let isPal = (s, left, right) => {
   while(left<right){
        if(s[left]!==s[right]){
            return false
        }
       left++;
       right--;
    }
    return true;
    
}



