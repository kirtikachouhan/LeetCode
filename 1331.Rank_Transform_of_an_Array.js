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
var arrayRankTransform = function(arr) {
    // let rank = new Map([...new Set(arr)].sort((a, b) => a - b).map((item, index) => [item, index + 1]));
    let resArr = new Set([...arr]);
    resArr = [...resArr].sort((a, b) => a - b);
    resArr = new Map(resArr.map((item, idx) => [item, idx + 1]));
    return arr.map(item => resArr.get(item));
};