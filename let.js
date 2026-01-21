// Student object to store details
let student = {
    name: "Tanuja",
    subjectCode: 2,
    marks: 78
};

// Function to select subject using switch case
function getSubject(code) {
    let subject;

    switch (code) {
        case 1:
            subject = "Mathematics";
            break;
        case 2:
            subject = "Science";
            break;
        case 3:
            subject = "English";
            break;
        default:
            subject = "Unknown Subject";
    }
    return subject;
}

// Function to calculate grade using conditional statements
function calculateGrade(marks) {
    let grade;

    if (marks >= 90) {
        grade = "A+";
    } else if (marks >= 75) {
        grade = "A";
    } else if (marks >= 60) {
        grade = "B";
    } else if (marks >= 40) {
        grade = "C";
    } else {
        grade = "Fail";
    }

    return grade;
}

// Function simulating an event (function call)
function evaluateStudent() {
    let subject = getSubject(student.subjectCode);
    let grade = calculateGrade(student.marks);

    console.log("Student Name:", student.name);
    console.log("Subject:", subject);
    console.log("Marks:", student.marks);
    console.log("Grade:", grade);
}

// Event simulation
evaluateStudent();
