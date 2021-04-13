"use strict";
/* eslint-disable */
function printCharsReverse(str) {
    if (str.length === 0 || str === "") {
        return;
    }
    else {
        printCharsReverse(str.substring(1));
        console.log(str.charAt(0));
    }

}
printCharsReverse("Chair");

///////////////////////////////////////////////////////
function log(){
    console.log("Hiiii");
}
function log(x){
    console.log("Hiiii", x);
}
function log(x, y){
    console.log("Hiiii", x, y);
}

log();
log(4);
log(4, 5);