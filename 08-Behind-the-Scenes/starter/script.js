"use strict";

/*
//function scope
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millennial = true;
      //Creating new variable with same name as outer scope's variable
      const firstName = "Steven";
      //Reassigning outer scope's variable
      output = `New Output!`;
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str); // Error block scope
    // console.log(add(2, 3)); // Error -> Block scoped
    console.log(millennial);
    // will be printed even outside the scope -> only with var
    // var is not block scoped, only function scoped
    console.log(output);
  }
  printAge();
  return age;
}
//Global scope
const firstName = "Jonas";
calcAge(1991);
// console.log(age);
// printAge();
*/
/*
console.log(me);
// console.log(jon);
// console.log(year);

var me = "Jonas";
let jon = "teacher";
const year = 1991;
console.log(jon);
console.log(year);

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function(a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

console.log(addExpr(2, 3));
console.log(addArrow(2, 3));
*/
/*
// Example
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted!");
}

var x = 1;
let y = 2;
const z = 3;
*/

// console.log(this);

// const calcAge = function(birthYear) {
// console.log(2037 - birthYear);
// console.log(this);
// };

// const calcAgeArrow = birthYear => {
// console.log(2037 - birthYear);
// console.log(this);
// };

// calcAge(1991);
// calcAgeArrow(1991);

const jonas = {
  year: 1991,
  calcAge: function() {
    console.log(this);
    console.log(2037 - this.year);
  }
};
jonas.calcAge();

const matilda = {
  year: 2017
};

matilda.calcAge = jonas.calcAge;

const f = jonas.calcAge;
f();
