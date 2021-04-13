"use strict";
/* eslint-disable */

/** Question 1: Write a function printNumbers (from, to) that outputs a number every second, 
 * starting from 'from' and ending with to */

function printNumbers ( from, final ) {
    let initial = from;
    let timerId = setInterval(() => {
        console.log(initial);
        if ( initial == final ) {
            clearInterval(timerId);
        }
        initial++;
    }, 1000);
}

printNumbers( 7, 19 );

/** Question 2: In the code below there’s a setTimeout call scheduled, then a heavy calculation is run,
 that takes more than 100ms to finish. */

 let i = 0;
 setTimeout (() => console.log(i), 100 );
 for ( let j = 0; j < 100000000; j++ ) {
     i++;
 }

 /**
  * Answer: * After the loop.
  * 100000000 
  */

// function sayHi (p, w) {
//     console.log(p + ', ' + w );
// }
// setTimeout(sayHi, 3000, "hello", "Jhon");