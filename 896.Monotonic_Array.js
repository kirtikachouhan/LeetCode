// An array is monotonic
// if it is either monotone increasing or monotone decreasing.
// An array A is monotone increasing
// if for all i <= j, A[i] <= A[j].An array A is monotone decreasing
// if for all i <= j, A[i] >= A[j].
// Return true
// if and only
// if the given array A is monotonic.
// Example 1:

//     Input: [1, 2, 2, 3]
// Output: true
/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    let Asc = true,
        Dsc = true;
    for (let i = 1; i < A.length; i++) {
        if (A[i - 1] > A[i]) {
            Asc = false;
        } else if (A[i - 1] < A[i]) {
            Dsc = false;
        }
    }
    return Asc || Dsc;
};