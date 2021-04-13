"use strict";
/* eslint-disable */

/** Question 1: For a given array, sum all the elements which are greater than 20. */

let arr = [1, 50, 40, 3, 10];
let filtered = arr.filter(item => item > 20);
let result = filtered.reduce((sum, initialValue) => sum + initialValue);
console.log(result);

/** Question 2: For a given String array, return a new array which contains all string, 
 * length is greater than and equals to 5, and contains letter ‘a’. */

const stringArray = ["car", "media", "bus", "school", "master"];
let filteredArray = stringArray.filter(item => item.length >= 5);
let newArray = [];
for (let array of filteredArray) {
    if (array.includes("a")) {
        newArray.push(array);
    }
}

console.log(newArray);

/** Question 3: Create a constructor function Employee with properties:
 *  firstName, lastName, birthdate: Date type, methods: getFullName(), getAge()
    •Create an array with a few Employee objects with different firstName, lastName, birthdate.
    •Find if there is any employee which age is greater than 20
    •Return a String array which contains the full name of employee and born after 2000 */

function Employee(firstName, lastName, birthDate) {
    this.firstName = firstName,
        this.lastName = lastName,
        this.birthDate = new Date(birthDate),
        this.getFullName = function () {
            return this.firstName + " " + this.lastName;
        },
        this.getAge = function () {
            let currentYear = new Date().getFullYear();
            let birthYear = new Date(this.birthDate).getFullYear();
            return currentYear - birthYear;
        }
};

let person1 = new Employee("Abreham", "Welday", "10-12-1990");
let person2 = new Employee("Bisrat", "Eyob", "2-5-1994");
let person3 = new Employee("Luwam", "Kidane", "2-8-2012");
let person4 = new Employee("Banna", "Girmatsion", "2-8-2001");

let employee = [person1, person2, person3, person4];

console.log(employee);

for (let i = 0; i < employee.length; i++) {
    if (employee[i].getAge() > 20) {
        console.log("Employee ", employee[i].getFullName(), "age is greater than 20.");
    }
}
let resultStringArray = [];
for ( let e of employee ) {
    if ( e.birthDate.getUTCFullYear() > 2000 ) {
        resultStringArray.push(e.getFullName());
    }
}
console.log(resultStringArray);


// let employ = [{ p: "c" }, { r: "t" }]; // Object literal
// console.log(employ);

let users = [{id: 1, name: "J"}, {id: 2, name: "H"}, {id: 3, name: "k"}];
console.log(users.map(item=>item.id));
let num = [1, 2, 3, 6];
console.log(num.reduce((previous, current) => previous+current));