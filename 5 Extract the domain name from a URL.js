// Write a function that when given a URL as a string,
// parses out just the domain name and returns it as a string.
// For example:

// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"
//  3qdwjl7bd5-4.de == "3qdwjl7bd5-4"

let test = "3qdwjl7bd5-4.de";
let target = ".";
let target1 = "//";

if (test.includes("www.")) {
  let arr = [];
  let pos = 0;
  while (true) {
    let foundPos = test.indexOf(target, pos);
    if (foundPos == -1) break;
    arr.push(foundPos);
    console.log(`Найдено тут: ${foundPos}`);
    pos = foundPos + 1; // продолжаем со следующей позиции
  }
  console.log(test.slice(arr[0] + 1, arr[1]));
} else if (test.includes("//")) {
  //   console.log(test.indexOf(target1));
  //   console.log(test.indexOf(target));
  console.log(test.slice(test.indexOf(target1) + 2, test.indexOf(target)));
} else {
  console.log(test.slice(0, test.indexOf(target)));
}

// Идеальный вариант решения

function domainName(url) {
  url = url.replace("https://", "");
  url = url.replace("http://", "");
  url = url.replace("www.", "");
  //   return url.split(".")[0];
  console.log(url.split(".")[0]);
}
