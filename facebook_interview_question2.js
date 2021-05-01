// Description : You are given an array and a integer k.
// Let's define the target position of every element as the index at which it would appear if this element was sorted.
// For example, if the array is [1, 2, 3, 4, 5] then the target position for 1 is 0, for 2 is 1 and so on.

// Now, every element in the array is present at either its target position or k indexes away from its target position.

// For instance, if the target position of an element is index 5, and k = 2, then this element may be present anywhere between indexes [3, 7] included.

// The task is to sort the array.

// Example input : [1, 4, 5, 2, 3, 8, 7, 6], k = 2
// Expected output : [1, 2, 3, 4, 5, 6, 7, 8]

function kSortedArray(array, k) {
  let i = k,
    res = array.slice(0, k),
    j = 0,
    ele,
    result = [];
  while (j < array.length) {
    res = minHeap(array[i], res);
    if (res.length >= k) {
      ele = res.shift();
      result.push(ele);
      j++;
      console.log("array", result);
    }
    i++;
  }
  return result;
}

function minHeap(ele, array) { // in place of this u can use minHeap concept, which return minimum element at index 1;
  array.push(ele);
  array.sort((a, b) => a - b);
  return array;
}

console.log(kSortedArray([2, 6, 3, 12, 56, 8], 3));
