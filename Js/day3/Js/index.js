//  Funcition

// var studentName

// function hello(studentName, className) {
//     console.log("Hello class");
//     console.log("my name is ", studentName, ", class: ",className);
// }

function hello(studentName, className) {
  if (studentName && className) {
    console.log("Hello class");
    console.log("my name is ", studentName, ", class: ", className);
    return true;
  }
  return false;
}
let check = hello("hiep", "Reactjs2102");

check = hello("Kha");
if (!check) {
  console.log("Something went wrong on print Kha");
}

// write a function pass a number,
//  and return true<=> number is prime, false<=> number is not prime
function isPrime(number) {
    if (number < 2) {
        return false;
    } else{
        let check = true;
        for ( let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                check = false;
                break;
            }
        }
        return check
    }
}
