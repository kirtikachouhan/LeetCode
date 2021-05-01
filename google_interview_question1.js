//given 2 array, reverse the array and mutiple it. and show result again in reverse order
// Example 1: [6, 1, 2]    216 * 23 = 4968
// [3, 2]
// [8,6,9,4]
const multiplyArray = function (a, b) {
  let res1 = reverArray(a),
    res2 = reverArray(b);
  result = res1.join("") * res2.join("");
  return reverArray(result.toString().split(""));
};
const reverArray = function (a) {
  for (let i = 0; i < a.length / 2; i++) {
    [a[i], a[a.length - i - 1]] = [a[a.length - i - 1], a[i]];
  }
  return a;
};
console.log(multiplyArray([6, 1, 2], [3, 2]));
