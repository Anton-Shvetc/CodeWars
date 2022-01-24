// You are given an array (which will have a length of at least 3, but could be very large) containing integers.
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
// Write a method that takes the array as an argument and returns this "outlier" N.

// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

let arr = [1, 1, 0, 1, 1];

let test = [];

let newArr = arr.filter((e) => {
  if (e % 2 === 0) {
    console.log(e);
    return "e";
  }

  test.push(e);
});
console.log(newArr);

console.log(test[0]);
console.log(newArr[0]);

if (newArr.length > test.length) {
  console.log(test[0]);
} else {
  console.log(newArr[0]);
}

// Идеальное решение

function findOutlier(int) {
  var even = int.filter((a) => a % 2 == 0);
  var odd = int.filter((a) => a % 2 !== 0);
  return even.length == 1 ? even[0] : odd[0];
}
