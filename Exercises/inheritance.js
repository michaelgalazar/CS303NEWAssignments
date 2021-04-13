"use strict";
/* eslint-disable */
// let head = {
//     glasses: 1
// }
// let table = {
//     pen: 3
// }
// let bed = {
//     sheet: 1,
//     pillow: 2
// }
// let pocket = {
//     money: 2000
// };

// pocket = Object.create(table);
// bed = Object.create(table);
// table = Object.create(head);

// console.log(pocket.sheet);
// console.log(bed.glasses);
///////////////////////////////////////////////

// function F() {
//     this.g = {y: "hello", z:[1, 3, 5, "Luwam"]};
// }
// let p = new F();
// console.log(p.g.y);

// function Student (w, r, y) {
//     this.fn = w;
//     this.ln = r;
//     this.age = y;
// }
// function Faculty (t, y, p) {
//     this.fn = t;
//     this.ln = y;
//     this.age = p;
// }
// Student.prototype.getFullName = function() {
//     return this.fn + " " +this.ln;
// }

// function Courses () {
//     this.cs301 = cs301;
//     this.cs303 = cs303; 
// }

// let s1 = new Student("Abreham", "Rustom", 23); 
// let f1 = new Faculty("fgt", "bnh", 54);

// Faculty.prototype = Object.create(Student.prototype);

// // Object.defineProperty(Faculty.prototype, 'constructor', {
// //     value: Faculty,
// //     enumerable: false, // so that it does not appear in 'for in' loop
// //     writable: true });

// let SName = Faculty.prototype.getFullName();
// console.log(SName);

// let obj = {
//     name: "Michael",
//     getName: function () {
//         return this.name;
//     },
//     array: [3, 6, 8, "Hi"]
// };
// //console.log(obj.array[2]);


// let input = {
//     name: "Michael",
//     lastName: "Alazar",
//     processUserInput: function () {
//         let self = this;
//         return function greeting () {
//             console.log( 'Hello ' + self.name + " " + self.lastName );
//         };
//     },
//     age: 35
// };

// let g = input.processUserInput();
// g();
//OR >>>> input.processUserInput()();

// function Foo (name, lName, age) {
//     this.fName = name;
//     this.lName = lName;
//     this.age = age;
//     this.bio = function () {
//         return this.fName + " " + this.lName + item;
//     };
//     let item = 56;
// };

// let foo = new Foo("A", "B", 23);
// let foor = new Foo("D", "E", 43);
// //console.log(foo.bio()); // undefined, doesn't inherit item element.
// //console.log(Object.getPrototypeOf(foo));

// Foo.prototype.fName = "Luwam";
// Foo.prototype.mName = "Girmatsion";

// let f1 = Object.create(foo);
// console.log(f1.mName);
// console.log(Object.getPrototypeOf(foo));
// console.log(foo.mName); // Shadowing
// console.log(f1.fName);
// console.log(Foo.prototype.mName);
// console.log(foo);
// console.log(f1);

// console.log("==========================");
// let obj1 = {a: "v", b: "w"};
// let obj2 = Object.create(obj1);
// obj1.name = "Laine";
// console.log(obj2.name);


// function f () {
//     let n = "Michael";
//     let l = "Alazar";
// }

// function g () {}

// // let x = 9;

// // function f (y) {
// //     return function (z) {
// //         return x + y + z;
// //     }
// // };

// // console.log(f(4)(3));


// function Graph() {
//     this.vertices = [4,4];
//   }
  
//   var g = new Graph();
//   console.log(g.vertices); // print [4,4]
//   console.log(g.__proto__.vertices) // print undefined
//   g.vertices = 25;
//   console.log(g.vertices); // print 25
//   delete g.vertices;
//   console.log(g.vertices); // print undefined
//   console.log(Object.getPrototypeOf(g));

////////////////////////////////////////////////////////////////////////

function foo(){}
foo.prototype = {
  foo_prop: "foo val"
};
function bar(){}
var proto = new foo;
proto.bar_prop = "bar val";
bar.prototype = proto;
var inst = new bar();
console.log(inst.foo_prop);
console.log(inst.bar_prop);