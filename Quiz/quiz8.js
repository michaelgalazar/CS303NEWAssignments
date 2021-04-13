"use strict";
/* eslint-disable */

// function aggreggte (inputArray){

//     let newObject = new Set(inputArray);
//     let result = {};
//     let count;
//     for (let key of newObject ) {
//         count = 0;
//         for ( let value of inputArray ) {
//             if ( key === value ) {
//                 count++;
//             }
//         }
//         result[key] = count;
//     }
//     return result;
// }
// let pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
// let petCounts = aggreggte(pets);
// console.log(petCounts);

// function replicate ( a, b ) {

//     let newArray = [];
//     if ( a <= 0 ) {
//         return newArray;
//     }
//     return recursiveReplication(a,b,newArray);
// }
// function recursiveReplication(c, d, inputArray) {
//     if ( c <= 0 ) {
//         return inputArray;
//     }
//     inputArray.push(d);
//     return recursiveReplication (c-1, d, inputArray);
// }
// console.log(replicate(3, 5));


let x=1;
function f(){
    console.log(x);
    let x = 3;
}
f();
