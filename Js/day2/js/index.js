console.log("hello world");
// name for vaiables
var a = 20;
var a = 30;

// 
let b = 20;
b= 40;


const c = 40;
// c = 50:

// const PI = 3,14;


console.log("a=", a, "b=", b, "c=", c);
// + - * /
var age = 2021 - 1996;

console.log("age:", age);
console.log("3 - 4 =", 3 - 4);
console.log("3 * 4 =", 3 * 4);
console.log("3 / 4 =", 3 / 4);
console.log("3 + 4 =", 3 + 4);
console.log("3 / 0 =", 3 / 0);
console.log("3 / 'a' =", 3 / "a");
// number










// tem












// object
let student = {
    name : "Kha",
    age: 25,
    className: "ReactJS"
}
console.log("studentName: ", student.name)

// array
let ages = [20, 10, 30]
console.log("ages: ", ages)

// boolean
let isBoy = true; //false


/*instrucments*/
// if - else if - else

let today = "5";
let isWetherGood = true
// let isTuesday = today === 3;
if ((today === 3 || today === 5) && isWetherGood) {
    console.log("Go to class")
} 
// else if(today === 5) {
//     console.log("Go to class")
// }
else{
    console.log("Do not go to class")
}




console.log('3 == "3"', 3 == "3")
console.log('3 === "3"', 3 === "3")




// switch case
let month = 4;
if (month === 1) {
    console.log("Jan")
} else if (month === 2) {
  console.log("Feb")
} else if (month === 3) {
    console.log("march")
} else {
    console.log("Dont know")
}

switch(month) {
    case 1:
        console.log("Jan");
    case 2:
        console.log("Feb");
    case 3:
        console.log("March");
        break;
    default:
        console.log("Dont know");        


}
switch (month) {
    case 1:
    case 3:
    case 5:
        console.log("31");
        break;    
    case 2:
        console.log("28");
        break;
    case 4:
    case 6:
    case 9:
        console.log("30");
        break;   
    default:
        console.log ("Dont know")             
}
// loop - for - while - do while
let begin = 1;
let end = 16;
for(let i = begin; i<= end; i = i + 1) {
    console.log("student:", i);
}
for (let i = 0; i < end; i++) {
    console.log("student:" + (i + 1));
    for(let j = 0; j < end; j++) {
        console.log("i.j ", i, j)
    }
}


let i = 0
while (i < end) {
console.log("stdent " + i)
i++
}


console.log("Please print me")

// get value from user
let value = window.prompt("Inter a number", 0)
console.log("value: ", value, typeof(value))

if (value % 2 === 0) {
    console.log("even")
} else {
    console.log("odd")
}
