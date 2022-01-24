// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

function anagrams(word, words) {}

let word = "laser";
let arr = [];

let words = ["lazing", "lazy", "lacer"];

words.forEach((e) => {
  if (word.split("").sort().join("") === e.split("").sort().join("")) {
    arr.push(e);
  }
  return arr;
});
console.log(arr);

// Идеальное решение

let anagrams = (word, words) =>
  words.filter(
    (w) => w.split("").sort().join("") === word.split("").sort().join("")
  );
