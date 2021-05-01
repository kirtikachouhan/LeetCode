// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
// Example 1:
// Input: root = [1,2,2,3,4,4,3]
// Output: true
// Example 2:
// Input: root = [1,2,2,null,3,null,3]
// Output: false
// Constraints:
// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 100
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return false;
  if (!root.left && !root.right) {
    return true;
  }
  return check(root.left, root.right);
};

var check = function (p, q) {
  if ((!p && q) || (p && !q)) {
    return false;
  }
  if (!p && !q) {
    return true;
  }
  if (p.val !== q.val) {
    return false;
  }
  return check(p.left, q.right) && check(p.right, q.left);
};
