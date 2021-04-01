// array
let marks = [9, 10, 3, 2, 5];
let names = ["Dai", "Tuan Anh", "Hai", "Hiep", "Cong"];

console.log("marks: ", marks);
console.log("marks[1]: ", marks[1]);

for (let i = 0; i < marks.length; i++) {
  console.log("i, marks[i]", i, marks[i], names[i]);
}

// object
let student1 = {
  name: "Dai",
  mark: 9,
};

console.log("name: ", student1.name, student1.mark);

let students = [
  student1,
  {
    name: "Tuan Anh",
    mark: 10,
  },
  {
    name: "Hai",
    mark: 3,
  },
];
for (let i = 0; i < students.length; i++) {
  let student = students[i];
  console.log("student ", i, student.name, student.mark);
}

// handle with methods
let reactJSStudents = [];

let newStudent = {
  name: "Nguyen Van A",
  mark: 0,
};
reactJSStudents.push(newStudent);
reactJSStudents.push({
  name: "Minh Ngoc",
  mark: 0,
});
reactJSStudents.push({
  name: "Tuan Hai",
  mark: 0,
});
console.log("reactJSStudents ", reactJSStudents);
// let theLastStudent = reactJSStudents.pop();
// console.log("reactJSStudents: ", reactJSStudents, theLastStudent);

// let theFistStudent = reactJSStudents.shift();
// console.log("reactJSStudents: ", reactJSStudents, theLastStudent);

// notice regular use: push(), pop()
// indexOf, lastIndexOf, slice, splice, reverse, join
console.log("marks: ", marks);

let indexOf10 = marks.indexOf(10);
console.log("indexOf10: ", indexOf10);
console.log("index Of", name.indexOf("hai"));

console.log(
  "index Of student Ngoc",
  reactJSStudents.indexOf({
    name: "Minh Ngoc",
    mark: 0,
  }),

  "\n A",
  reactJSStudents.indexOf({
    name: "Nguyen Van A",
    mark: 0,
  })
);
console.log("{} == {}", {} == {});

let number1 = 3;
let number2 = number1;
number2 = 5;
console.log("number1:", number1, "number2: ", number2);

let studentA = {
  name: "Nguyen Van A",
};
// let studentAClone = studentA;
// studentAClone.name = "Nguyen Van B";
// console.log("studentA: ", studentA);

// console.log("lastIndexOf10: ", marks.lastIndexOf(10));
// console.log("marks.slice(start, end)", marks.slice(1));
// console.log("marks: ", marks);
// console.log(
//   "marks.splice(startIndex, how_many_remove, how_ many_sppend): ",
//   marks.splice(1, 2)
// );
console.log("marks: ", marks);
// console.log("marks.join()", marks.join());
let result =" ";
console.log("marks: ", marks.join(" | "));

console.log("marks.reverse(): ", marks.reverse());

//// callback
function hello() {
    console.log("Hello");
}

function say(callback) {
    callback();
}

say(hello);

// find, filter, 
console.log("reactJSStudents: ", reactJSStudents);

function findCondition(student) {
    return student.name == "Minh Ngoc";
}






// let found = false;
// for ( let i =0; i < reactJSStudents.length; i++) {
//     if (reactJSStudents[i].name == "Minh Ngoc") {
//         found = true;
//         break;
//     }
// }
// console.log("Found: ", found);
let foundStudent = reactJSStudents.find(findCondition);
console.log("foundStudent: ", foundStudent);