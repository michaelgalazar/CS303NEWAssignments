"use strict";
/* eslint-disable */
// function foo (y) {
//     var count = 8;
//     return function li(x) {
//         return y+x+count;
//     }
// }

// let result = foo(5);
// console.log(result(6));

// let s = function (){
//     let m = "hello";
//     console.log(m);
// };

// if (true){
//     m = "hi";
// }

// let m = {s: "t", r: "y"};
// m.f = 4;
// console.log(m);
// console.log(Object.keys(m)[2]);

// function sayHi() {
//     let result = 6;
//     sayHi.count++;
//     console.log("Hi");
// }
// sayHi.count = 5;
// sayHi();
// sayHi();
// sayHi();
// console.log(sayHi.count);
// console.log(result);

function makeArmy() {
    let shooters = [];
    let i = 0;
    return function shooter() {
        while (i < 2) {
            console.log(i);
            i++;
            shooters.push(shooter);
        }
        return shooters;
    }; 
}
let army = makeArmy();
console.log(army()[0]);
