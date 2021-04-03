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
var relativeSortArray = function(arr1, arr2) {
    let count = 0;
    for (let i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i], count) !== -1) {
            let ind = arr1.indexOf(arr2[i], count);
            if (ind !== count) {
                arr1[ind] = arr1[count];
                arr1[count] = arr2[i];

            }
            count++;
        }
        if (i === arr2.length - 1) {
            let temp = arr1.splice(count, arr1.length);
            temp.sort((a, b) => a - b);
            arr1.push(...temp);
        }
    }
    return arr1;
};