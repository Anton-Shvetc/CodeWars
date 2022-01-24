// Move the first letter of each word to the end of it,
//  then add "ay" to the end of the word.
// Leave punctuation marks untouched.

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

let test = "Pig latin is cool";

let arr = test.split(" ");
console.log(arr);

let reg = /[.,:!?]/;

let newArr = arr.map((e) => {
  if (!e.match(reg)) {
    return e.concat(e[0]).slice(1).concat("ay");
  }
  return e;
});
console.log(newArr.join(" "));

// Идеальное решение

function pigIt(str) {
  return str.replace(/(\w)(\w*)(\s|$)/g, "$2$1ay$3");
}
