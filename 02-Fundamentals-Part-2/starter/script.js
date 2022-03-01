"use strict"; ////////////

/*
let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");
*/

// const interface = 'Audio';
// const private = 534;
/*
//functions
function logger() {
  console.log("My name is Jonas");
}

//calling / running / invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

fruitProcessor(5, 0);
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


const num = Number("23");
*/
/*
const age1 = AgeCalc1(1991);
console.log(age1);

//Function declaration
function AgeCalc1(birthYear) {
  return 2037 - birthYear;
}

const age2 = AgeCalc2(1991);
console.log(age1, age2);

//Anonymous function - function expression
const calcAge2 = function(birthYear) {
  return 2037 - birthYear;
};
*/
/*
//Arrow functions
const calcAge3 = birthYear => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);


const yearsUntilRetirement = birthYear => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement;
};
*/
/*
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "John"));
console.log(yearsUntilRetirement(1980, "Bob"));
*/
/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

fruitProcessor(2, 3);
*/

/*
const calcAge = function(birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function(birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired.`);
    return -1; //return same type as corresponding parameter
  }

  //   return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));
*/
/*
const averageCalc = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let dolphinsScore = averageCalc(44, 23, 71);
let koalasScore = averageCalc(65, 54, 49);
console.log(dolphinsScore, koalasScore);
const winnerData1 = checkWinner(dolphinsScore, koalasScore);

console.log(winnerData1);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    return `Dolphins win (${avgDolphins} vs.${avgKoalas})`;
  } else if (avgKoalas >= avgDolphins * 2) {
    return `Koalas win (${avgKoalas} vs.${avgDolphins})`;
  } else {
    return `There is no winner.`;
  }
}

dolphinsScore = averageCalc(85, 54, 41);
koalasScore = averageCalc(23, 34, 27);
console.log(dolphinsScore, koalasScore);
const winnerData2 = checkWinner(dolphinsScore, koalasScore);
console.log(winnerData2);

// // const yearsUntilRetirement = birthYear => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return retirement;
// };
*/
/*
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "John"));
console.log(yearsUntilRetirement(1980, "Bob"));
*/
/*
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

//Literal syntac for Array
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(friends[0], friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jonathan";
console.log(friends);

// friends = ["Bob", "Alice"];
// console.log(friends);

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
*/
/*
//Exercise
const calcAge = function(birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1])
];
*/
/*
console.log(ages);

//Array method's
const friends = ["Michael", "Steven", "Peter"];

//Puts new elements to the back of the array
const newLength = friends.push("Jay"); // Last new
console.log(friends);
//Shows new length of Array
console.log(newLength);

//Puts new elements in front of the array
friends.unshift("John"); // First new
console.log(friends);

//Remove elements from last position of array
friends.pop(); //Last Remove
const popped = friends.pop();
console.log(popped);
console.log(friends);

//Remove fist element of array
friends.shift(); // First Remove
console.log(friends);

//Array method to check If item is in list / returns index
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

//E6 new method
friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));
console.log(friends.includes("23"));

//Most used cased for include method
if (friends.includes("Steven")) {
  console.log("You have a friend called Peter");
}
*/
/*
//Challenge
const billData = [125, 555, 44];
const tipData = [];
const totalData = [];
const finalData = [];
calcTip(billData);
calcTip(billData);
calcTip(billData);

function calcTip(billData) {
  const position = billData.length - 1;
  const tip =
    billData[position] >= 50 && billData[position] <= 300
      ? billData[position] * 0.15
      : billData[position] * 0.2;
  totalData.unshift(billData[position]);
  billData.pop();
  tipData.unshift(tip);
  return tipData;
}
console.log(tipData);
console.log(totalData);

function Total(tipData, totalData) {
  const positionData = totalData.length - 1;
  const positionTip = tipData.length - 1;
  const total = totalData[positionData] + tipData[positionTip];
  totalData.pop();
  tipData.pop();
  finalData.push(total);
  return finalData;
}

// const dataWithTotal = Total(billData, tipData);
console.log(Total(tipData, totalData));
console.log(Total(tipData, totalData));
console.log(Total(tipData, totalData));
*/
/////////////////
/*
const calcTip = function(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.5 : bill * 0.2;
};
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

//Objects
//Data structure
const JonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"]
];

*/
/*
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"]
};

console.log(jonas);

console.log(jonas.lastName);
//Bracket notation
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
);
//doesn't work this way with .notation
console.log(jonas.interestedIn);
//Power of bracket notation to access properties
console.log(jonas[interestedIn]);

//Using falsy and truly values to see if name of property exists
if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

// Challenge the user
// Jonas has 3 friends, and his best friend is called Michael
function michael(name, friends, bestFriend) {
  return `${name} has ${friends} friends, and his best fiends is ${bestFriend}`;
}

console.log(michael(jonas.firstName, jonas.friends.length, jonas.friends[0]));
*/

/*
//Methods in objects / this.keyword
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  age: 46,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  calcAge: function(birthYear) {
    return 2013 - birthYear;
  }

  calcAge: function() {
    console.log(this);
    return 2013 - this.birthYear;
  }
  Creating a property inside a method / property
  calcAge: function() {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function() {
    console.log(this);
    return `${this.firstName} is a ${this.calcAge()} old ${this
      .job}, and he has ${this.hasDriversLicense
      ? "a"
      : "no"} driver's license`;
  }
};

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.getSummary());
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// console.log(jonas.calcAge(1991));
// console.log(jonas["calcAge"](1991));

// function getSummary(person) {
//   //"Jonas is a 46-year old teacher, and he has a driver's license"
//   if (person.hasDriversLicense) {
//     return `${person.firstName} is a ${person.calcAge()} old ${person.job}, and he has a driver's license`;
//   } else {
//     return `${person.firstName} is a ${person.calcAge()} old ${person.job}, and he has no driver's license`;
//   }
// }
*/
/*
// Challenge
const mark = {
  firstName: "Mark",
  lastName: "Miller",
  height: 1.69,
  weight: 78,
  bmiCalculator: function() {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi;
  }
};

const john = {
  firstName: "John",
  lastName: "Smith",
  height: 1.95,
  weight: 92,
  bmiCalculator: function() {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi;
  }
};

john.bmiCalculator();
mark.bmiCalculator();
console.log(john.bmi, mark.bmi);

function HigherBmi(person1, person2) {
  if (person1.bmi > person2.bmi) {
    return `${person1.firstName}'s BMI ${person1.bmi} is higher than ${person2.firstName}'s.`;
  } else if (person2.bmi > person1.bmi) {
    return `${person2.firstName}'s BMI ${person2.bmi} is higher than ${person1.firstName}'s.`;
  } else {
    return `Draw. No winner.`;
  }
}

const highestBmi = HigherBmi(mark, john);
console.log(highestBmi);
*/

//Loops
// for (let index = 1; index <= 10; index++) {
//   console.log(`Lifting weights repetition ${index}`);
// }~

/*
const JonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true
];

// for (let index = 0; index < JonasArray.length; index++) {
//   console.log(JonasArray[index], typeof JonasArray[index]);
// }
const newArray = [];
for (let index = 0; index < JonasArray.length; index++) {
  console.log(JonasArray[index], typeof JonasArray[index]);
  //Filling types array
  // newArray[index] = typeof JonasArray[index];
  newArray.push(typeof JonasArray[index]);
}
console.log(newArray);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let index = 0; index < years.length; index++) {
  ages.push(2037 - years[index]);
}

console.log(ages);
console.log(newArray);

// Continue
console.log("--ONLY STRINGS-- ");
for (let index = 0; index < JonasArray.length; index++) {
  if (typeof JonasArray[index] != "string") continue;
  console.log(JonasArray[index], typeof JonasArray[index]);
}
//Break //break escapes iteration if condition is met
console.log("--BREAK WITH NUMBER-- ");
for (let index = 0; index < JonasArray.length; index++) {
  if (typeof JonasArray[index] === "number") break;
  console.log(JonasArray[index], typeof JonasArray[index]);
}
*/
// const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
//   true
// ];

/*
//backwards loop
for (let index = jonas.length - 1; index >= 0; index--) {
  console.log(index, jonas[index]);
}

//Loop inside loop
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----Starting exercise ${exercise}`);

  for (let index = 1; index < 6; index++) {
    console.log(`Exercise ${exercise}Lifting weight repetition ${index}`);
  }
}
*/

//Loops
// for (let index = 1; index <= 10; index++) {
//   console.log(`Lifting weights repetition ${index}`);
// }

// let index = 1;
// while (index <= 10) {
//   console.log(`Lifting weights repetition ${index}`);
//   index++;
// }
/*
//Math.trunc get rid of decimal numbers
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log(`Loop is about to end...`);
  }
}
*/

const calcTip = function(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let index = 0; index < bills.length; index++) {
  tips.push(calcTip(bills[index]));
  totals.push(bills[index] + tips[index]);
}
console.log(bills, tips, totals);

const calcAverage = function(arr) {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
    console.log(sum);
    if (index === arr.length - 1) {
      return sum / arr.length;
    }
  }
};
console.log(calcAverage(totals));
// console.log(calcAverage(tips));
// console.log(calcAverage([5, 9, 4]));
