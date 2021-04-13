"use strict";
/* eslint-disable */
function sum () {
    let sumTotal = 0;
    for (let i = 0; i < arguments.length; i++) {
        sumTotal += arguments[i];
    }
    return sumTotal;
}
function sum () {
    let sumTotal = 0;
    for (let i of arguments) {
        sumTotal += i;
    }
    return sumTotal;
}
const result = sum("378"); 
console.log(result);

let i = "hello";
console.log([...i]);

/////////////////////////////////////////////////////////////////////////////////////

function copy(mainObj) {
    let objCopy = {}; // objCopy will store a copy of the mainObj
    let key;
  
    for (key in mainObj) {
      objCopy = mainObj[key]; // copies each property to the objCopy object
    }
    return objCopy;
  }
  
  const mainObj = {
    a: 2,
    b: 5,
    c: {
      x: 7,
      y: 4,
    },
  }
  
  console.log(copy(mainObj));

  //////////////////////////////////////////////////////////////////////////////

  let someObj = {
    a: 2,
  }
  
  let obj = Object.create(someObj, {
    b: {
      value: 2,
    },
    c: {
      value: 3,
      enumerable: true,
    },
  });
  
  let objCopy = Object.assign({}, obj);
  console.log(objCopy); // { c: 3 }

  function z (x) {
    console.log(x);
    console.log(y);
  //  let y = 20;
  }
  let y = 10;
  z(30);