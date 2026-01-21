function greet(name ,callback) {
    let message = "Hii"+name;
    callback(message);
}

function print(text){
    console.log(text);
}
greet("Tanuja",print);

function fruits(Apples, Banana,callback){
    let message = "i want more apples " + Apples + " and " + Banana;
    callback(message);
}
function print(message){
    console.log(message);
}
fruits("Apples", "Banana", print);

function cars(audi,thar,creata,callback){
    let message = "i like audi " + "i like thar " + "i like creata";
    callback(message);
}
function print(message){
    console.log(message);
}
cars("audi","thar","creata",print);

function display(student, callback) {
    callback(student);
}
function showdetails(obj) {
    console.log("Name:", obj.name);
    console.log("Age:", obj.age);
    console.log("grade:", obj.grade);
    console.log("gender:", obj.gender)
}
let student = {
    name: "Tanuja",
    age: 20,
    grade: "A",
    gender: "Female"
};
display(student, showdetails);



function print(departments, callback) {
    callback(departments);
}
function incampus(obj) {
    console.log("cse:", obj.cse);
    console.log("ece:", obj.ece);
    console.log("mech:", obj.mech);
    console.log("eee:", obj.eee);
    console.log("civil:", obj.civil);


}
let departments = {
    cse:2,
    ece:3,
    mech:4,
    eee:5,
    civil:6,

}
print(departments, incampus);

console.log(message);

var message = "JavaScript Hoisting";

var message;
console.log(message);
message = "JavaScript Hoisting";

console.log(user);

var user = {
    name: "Anu",
    age: 22
};

showData();

function showData() {
    let text = "Function Hoisting Example";
    let person = { name: "Kiran", role: "Developer" };

    console.log(text);
    console.log(person);
}




// --------------------
// Global Scope
// --------------------
let passingMarks = 50;

// --------------------
// Function Definition
// --------------------
function manageStudentGrades(students) {

    // Convert names to uppercase using map()
    let upperCaseStudents = students.map(student => {
        return {
            name: student.name.toUpperCase(),
            marks: student.marks
        };
    });

    // Filter students who scored 50 or above using filter()
    let passedStudents = upperCaseStudents.filter(student => student.marks >= passingMarks);

    // Display student details using forEach()
    passedStudents.forEach(student => {

        // Local Scope Variables
        let grade;

        if (student.marks >= 80) {
            grade = "A";
        } else if (student.marks >= 65) {
            grade = "B";
        } else if (student.marks >= passingMarks) {
            grade = "C";
        }

        // String methods
        let firstThreeLetters = student.name.slice(0, 3);
        let hasLetterA = student.name.includes("A");

        console.log("Name:", student.name);
        console.log("First 3 Letters:", firstThreeLetters);
        console.log("Includes 'A' or 'a':", hasLetterA);
        console.log("Marks:", student.marks);
        console.log("Grade:", grade);
        console.log("--------------------");
    });
}

// --------------------
// Function Call
// --------------------
manageStudentGrades([
    { name: "Tanuja", marks: 85 },
    { name: "Rahul", marks: 45 },
    { name: "Anita", marks: 72 },
    { name: "Vikas", marks: 55 },
    { name: "Rohit", marks: 30 }
]);

