let number = 5

function checknumber() {
    console.log("number ", number);
    if (number % 2 ===1) {
        return "ODD"
    } else {
        return "EVEN"
    }
}

console.log("5 is", checknumber(5));
// print 1 - n without for,while

let n = 5;
// for (var i = 1; i <= 10; i++) {
//     console.log(i);
// }


function print(n) {
    if(n == 0) {
        return;
    }
    print(n - 1);
    console.log(n);
   
}

print(n);

// use recursive, calculate total 1 - n
function calculate(n) {
    if (n === 1) return 1;
    return n + calculate(n - 1)
}



console.log("total from 1 - n", calculate(10));
//  2 other to declare a funtion
//  function expression

let hello = function () {
    console.log("hello class:");

}
hello();



// arrow function - (fat arrow)
// let checknumberA = (number) => (number % 2 === 1;  "ODD" ; "EVEN");
//     console.log(checknumberA(5));



// NUMBER HANDLER
let index = 0;
index = index + 1
index ++
++index
index--
--index
// index = index + 10 <=> index += 10 (/=m *= -=)

// function getInputNumber() {
//     let number = window.prompt("enter a number: ", 0);
//     console.log(number, typeof number);
//     return number;
// }
// console.log(getInputNumber(2));



// console.log(getInputNumber());
console.log("floor(1.5)", Math.floor(1.5));
console.log("floor(1.5)", Math.ceil(1.5));
console.log("floor(1.5)", Math.round(1.5));
// random
console.log("random()", Math.random());
function rollADice() {
    return math.ceil(math.random() * 6);
}


function randomFromTo(from, to) {
    return from - 1 + Math.ceil(Math.random() * (to - from + 1));
}

// console.log("Roll a dice: ", rollADice());
console.log("random(10, 15)", randomFromTo(10, 15)); 


// string handler
// let studentName = "Hoang\tKha"
// studentName = "Tran\n" + studentName;
// console.log("studentName", studentName);

studentName = " Vu Dinh Dai";
console.log("studentName.length", studentName.length);
console.log("studentName.toUpperCase", studentName.toUpperCase);
console.log("studentName.length", studentName.length);
























let useName = "traN tuAn anH"

function normalllizeName(useName) {
    useName = useName.totowerCase();
    console.log("useName", useName);
    for(let i = 0; i < useName.length; i++) {
        if (i == 0 || useName.charAt(i - 1) == " ") {
            useName = 
            useName.silice(0, i) +
            useName.charAt(i).toUppercase() +
            useName.slice(i + 1);
        }
    }
    
    return useName;
}

console.log("normalize from", useName, "to", normalizeName(useName));
useName = normalizeName(useName);
console.log("replaceName: ", replaceName(useName) );