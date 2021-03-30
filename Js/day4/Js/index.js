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