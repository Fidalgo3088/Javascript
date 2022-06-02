"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22
    },
    fri: {
      open: 11,
      close: 23
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24
    }
  },
  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // orderDelivery: function(obj) {
  //   console.log(obj);
  // }

  // orderDelivery: function({ time, address, mainIndex, starterIndex }) {
  //   console.log(
  //     `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[
  //       mainIndex
  //     ]} will be delivered to ${address} at ${time}`
  //   );

  orderDelivery: function({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[
        mainIndex
      ]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  }
};

restaurant.orderDelivery({
  address: "Via del Sole, 21",
  starterIndex: 2
});

// restaurant.orderDelivery({
//   time: "22:30",
//   address: "Via del Sole, 21",
//   mainIndex: 2,
//   starterIndex: 2
// });
/*

//Destructing arrays
const arr = [2, 3, 4];
const a = [0];
const b = [1];
const c = [2];

// This is how you do destructing to an array // destructing is unpacking an object or array in to separate variables
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

const [first, second] = restaurant.categories;
//const [first, , second] = restaurant.categories;
let [main, , secondary] = restaurant.categories;
// console.log(first, second);
console.log(main, secondary);

//old way of assining variables
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

// Switching variables
[main, secondary] = [secondary, main];
console.log(main, secondary);
console.log(restaurant.order(2, 0));

//Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Nested destructering
const nested = [2, 4, [5, 6]];
console.log(nested);

// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default values
const [p = 1, q = 1, r = 1] = [8, 9];
// const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r);

const { name, categories, openingHours } = restaurant;
console.log(name, openingHours, categories);

//renaming the variables with :
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags
} = restaurant;

console.log(restaurantName, hours, tags);

//Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
*/
/*
//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

//use parenthesis to destruct objects()
({ a, b } = obj);
console.log(a, b);

// Nested Objects
const { fri: { open: o, close: c } } = openingHours;
console.log(o, c);

*/
const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

//spread_operator
const newArray = [1, 2, ...arr];
const newArray2 = [1, 2, arr];
console.log(...newArray2);
console.log(...newArray);

// Building a new Array
const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

//Copy Array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 Arrays
const menuJoin = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menuJoin);

//Iterables: arrays, strings, maps, sets. Not OBJECTS!!!
const str = "Jonas";
const letters = [...str, " ", "S."];
console.log(letters);
console.log(...str);

// spread operator doesnt work like because this is not a place thats
// expects multiple values separeted by a comma
// console.log(`${...str} Schmedtmann`);

/*
const ingredients = [prompt("Let\'s make pasta! Ingredient 1?"),
 prompt("Let\'s make pasta! Ingredient 2?"),
 prompt("Let\'s make pasta! Ingredient 3?")
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);
*/

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);

