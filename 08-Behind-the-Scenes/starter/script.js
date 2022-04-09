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

/*
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
matilda.calcAge();

const f = jonas.calcAge;
f();
*/
// console.log(this);

// const calcAge = function(birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1980);

// console.log(this);

// var firstName = "Matilda";

// const jonas = {
//   firstName: "Jonas",
//   year: 1991,
//   calcAge: function() {
//     console.log(this);
//     console.log(2037 - this.year);

//solution 1
// way to preserve the this key word
// const self = this;

// const isMillenial = function() {
//   console.log(self);
//   console.log(this);
//   // console.log(this.year >= 1981 && this.year <= 1996);
//   console.log(self.year >= 1981 && self.year <= 1996);
// };

//solution 2
//this keyword inherits from its parent function. With a regular function this would not work => Result would be undefined
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };

//     isMillenial();
//   },

//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   }
// };

// jonas.greet();
// jonas.calcAge();

// //arguments keyword
// const addExpr = function(a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// // var addArrow = (a, b) => a + b;
// //arguments keyword only exits in regular functions
// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);

/*
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: "Jonas",
  age: 30
};
const friend = me;
friend.age = 27;
console.log("Friend:", friend);
console.log("Me:", me);
*/

//Primitve types
let lastName = "Wiliams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);

//Reference types
const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27
};
const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("Before marriage:", jessica);
console.log("After marriage:", marriedJessica);

// marriedJessica = {};

//Copying objects
const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"]
};

//Object.assign -> merges 2 objects and then returns a new one
//jessica 2 is merged with a new empty object {}
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";

jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");

console.log("Before marriage", jessica2);
console.log("After marriage", jessicaCopy);
