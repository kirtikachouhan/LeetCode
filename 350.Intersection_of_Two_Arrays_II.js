// Given two integer arrays nums1 and nums2,
// return an array of their intersection.Each element in the result must appear as many times as it 
// shows in both arrays and you may
// return the result in any order.
// Example 1:
//     Input: nums1 = [1, 2, 2, 1], nums2 = [2, 2]
// Output: [2, 2]
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let result = [];
    for (let i = 0; i < nums1.length; i++) {
        let inx = nums2.indexOf(nums1[i]);
        if (inx >= 0) {
            result.push(nums1[i]);
            nums2.splice(inx, 1)
        }
    }
    return result;
};