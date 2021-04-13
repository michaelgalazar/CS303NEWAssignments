 "use strict";
/* eslint-disable */

// let timeId = setInterval(() => console.log('tick'), 2000);
// setTimeout(() => clearInterval(timeId), 7000);
// //console.log(timeId);
// //clearTimeout(timeId);
// //console.log(timeId);

// let c = {
//     fn: "Jhon",
//     foo: function() {
//         return this.fn;
//     }
// };

// function zoo () {
//     console.log(c.foo());
// }

// zoo(c.foo);

function greeting () {
    console.log(this);
}
console.log(this);
greeting();