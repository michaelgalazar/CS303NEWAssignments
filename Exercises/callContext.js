"use strict";
/* eslint-disable */
// function add (x,y,z){
//     console.log(this);
// }
// add.call();

function Product(name, price) {
    this.name = 'milk';
    this.price = 8;
    this.name = name;
    this.price = price;
    
  }
  
  function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
  }
  
   
  
  console.log(new Food('cheese', 5).name);
  console.log(new Product('bread', 9).name);

  let a = {s: 4, t: 6, add() {return "y"}, value: {m: this.s}};
  console.log(a.value);