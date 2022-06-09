"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
/*
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
  },

  orderPizza: function(mainIngredient, ...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};
*/
/*
restaurant.orderDelivery({
  address: "Via del Sole, 21",
  starterIndex: 2
});
*/
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
/*
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
*/
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

//Objects
/*
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);

// 1.Destructuring
//Rest Pattern and Parameters
//Spread, because on RIGHT side of = 
const arr = [1,2, ...[3, 4]];

//Rest, because on LEFT side of =
const [a,b, ...others] = [1, 2, 3, 4,5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);
const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);

// 2.Functions
const add = function(...numbers){
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum +=
    numbers[i];
    console.log(sum);
}

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
*/
/*
So the spread operator is used
where we would otherwise write values, separated by a comma.
On the other hand the rest pattern is basically used
where we would otherwise write variable names
separated by commas.
So, again the rest pattern can be used
where we would write variable names, separated by commas
and not values separated by commas.
So it's a subtle distinction, but this is how you know
when and where to use spread and rest.
*/
/*
console.log('---OR---');
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = '';
// restaurant.numGuests = 10;
// restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---AND---');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'Jonas');

//Pratical Example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms','spinach');  
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms','spinach');
*/
/*
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
//OR assignment operator 
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

//Nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

//AND assignment operator 
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
*/

// Coding Challenge #1
// We're building a football betting app (soccer for my American friends 😅)!
// Suppose we get data from a web service about a certain game ('game' variable on
// next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1. Create one player array for each team (variables 'players1' and
// 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players
// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
      ],
    ],
      score: '4:0',
      scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
      'Hummels'],
      date: 'Nov 9th, 2037',
      odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
      },
    };


    //1.Create one player array for each team (variables 'players1' and 'players2')
    const [players1, players2] = game.players;
    console.log(players1, players2);
    // 2. The first player in any player array is the goalkeeper and the others are field
    // players. For Bayern Munich (team 1) create one variable ('gk') with the
    // goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
    // field players
    const [gk, ...fieldPlayers] = players1;
    console.log(gk, fieldPlayers);
    // 3. Create an array 'allPlayers' containing all players of both teams (22 players)
    const allPlayers = [...players1, ...players2]
    console.log(allPlayers);
    // 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
    // new array ('players1Final') containing all the original team1 players plus
    // 'Thiago', 'Coutinho' and 'Perisic'
    const players1Final = [...players1, 'Thiago','Coutinho','Perisic']
    console.log(players1Final);
    // 5. Based on the game.odds object, create one variable for each odd (called
    // 'team1', 'draw' and 'team2')
    const {odds:{team1, x: draw, team2}} = game;
    console.log(team1, draw, team2);
    // 6. Write a function ('printGoals') that receives an arbitrary number of player
    // names (not an array) and prints each of them to the console, along with the
    // number of goals that were scored in total (number of player names passed in)
    // Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
    // Then, call the function again with players from game.scored
    const printGoals = function(...players){
      console.log(`${players.length} goals were scored`);
    }

    printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
    printGoals('Davies', 'Muller');
    printGoals(...game.scored);

    // 7. The team with the lower odd is more likely to win. Print to the console which
    // team is more likely to win, without using an if/else statement or the ternary
    // operator.
    team1 < team2 && console.log(`Team 1 is more likely to win`);
    team1 > team2 && console.log(`Team 2 is more likely to win`);
*/

/*
//For of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for(const item of menu) console.log(item);

for(const  item of menu.entries()){
  console.log(`${item[0] +1}: ${item[1]}`);
}

for(const [i, el] of menu.entries()){
  console.log(`${i +1}: ${el}`);
}

console.log([...menu.entries()]);
*/

const weekdays = ['mon','tue','wed','thu','fri','sat','sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22
  },
  [weekdays[4]]: {
    open: 11,
    close: 23
  },
  [`day-${2+4}`]: {
    open: 0, // Open 24 hours
    close: 24
  }
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // orderDelivery(obj) {
  //   console.log(obj);
  // }

  // orderDelivery({ time, address, mainIndex, starterIndex }) {
  //   console.log(
  //     `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[
  //       mainIndex
  //     ]} will be delivered to ${address} at ${time}`
  //   );

  orderDelivery({
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
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};



    

