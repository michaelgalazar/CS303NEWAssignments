"use strict";
/* eslint-disable */

/** QUestion 1) Create an object student using object literal which has */

let student = {
    firstName: "Anonymous",
    lastName: "Anonymous",
    grades: []
};
student.inputNewGrade = function ( newGrades ) {
    this.grades.push(newGrades);
};
student.computeAverageGrade = function () {
    let sum = 0;
    for ( let grade of this.grades ) {
        sum += grade;
    }
    return sum / this.grades.length;
};

let student1 = Object.create(student);
student1.grades = [67, 89, 56];
student1.inputNewGrade(82);

let student2 = Object.create(student);
student2.grades = [90, 74, 69];
student2.inputNewGrade(59);

let student3 = Object.create(student);
student3.grades = [71, 59, 73];
student3.inputNewGrade(75);
student3.inputNewGrade(91);

let student4 = Object.create(student);
student4.grades = [83, 72, 80];

let student5 = Object.create(student);
student5.grades = [87, 96, 85];

let studentsArray = [student1, student2, student3, student4, student5];

for ( let eachStudent of studentsArray ) {
    console.log("The average grade ", eachStudent.computeAverageGrade());
}

/** Question 2) 2: Redo the Question 1 using Constructor Function */


function Student (fName, lName, grades) {
    this.fName = fName;
    this.lName = lName;
    this.grades = grades;

    this.inputNewGrade = function ( newGrades ) {
        this.grades.push(newGrades);
    };
    this.computeAverageGrade = function () {
        let sum = 0;
        for ( let grade of this.grades ) {
            sum += grade;
        }
        return sum / this.grades.length;
    };
}

let s1 = new Student("Michael", "Alazar", [91, 89, 95, 54]);
s1.inputNewGrade(72);
let s2 = new Student("Luwam", "Teages", [76, 94, 69, 83]);
let s3 = new Student("Ruth", "Even", [75, 84, 81, 68]);
let s4 = new Student("Nebiat", "Aklilu", [85, 73, 91]);

let newArrayOfStudents = [s1, s2, s3, s4];

for ( let eachStudent of newArrayOfStudents ) {
    console.log("The average grade ", eachStudent.computeAverageGrade());
}


/** Question 3) Add a new method named sort() without parameters in built-in constructor function Array.*/

newArrayOfStudents.sort = Array.prototype.sort;

newArrayOfStudents.sort();
console.log(newArrayOfStudents.sort());
