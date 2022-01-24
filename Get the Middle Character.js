// Задание 

Kata.getMiddle("test") should return "es"
Kata.getMiddle("testing") should return "t"
Kata.getMiddle("middle") should return "dd"
Kata.getMiddle("A") should return "A"



let names = "names";



function getMiddle(str)  {

    if (str.length % 2 === 0) {
console.log(str.slice((str.length / 2 - 1), (str.length / 2 + 1) ));

    } else {
         console.log(str.slice((str.length / 2 ), (str.length / 2 + 1) ));
    }

   
}
getMiddle(names);


