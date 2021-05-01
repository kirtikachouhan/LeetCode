// Given 2 array sum first element of array with first element of second element of array.
//[19,9,9]+[1] = [0,1,0,1]

var sumArray = function (a, b) {
  var loopLen = a.length > b.length ? a.length : b.length,
    carry = 0,
    res = [];

  for (let i = 0; i < loopLen; i++) {
    console.log("add", a[i], b[i], carry);
    let first = a[i] === undefined ? 0 : a[i],
      second = b[i] === undefined ? 0 : b[i];
    let sum = first + second + carry;
    console.log("s", sum);
    if (sum > 9) {
      res.push(sum % 10);
      carry = Math.floor(sum / 10);
    } else {
      res.push(sum);
      carry = 0;
    }
    console.log("res", res);
  }
  if (carry) {
    res.push(carry);
  }
  return res;
};

console.log(sumArray([1], [19, 9, 9]));
