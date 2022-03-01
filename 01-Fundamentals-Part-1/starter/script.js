let js = "amazing";
/*
// if (js === 'amazing') alert('JavaScript is FUN!');      
console.log(40+8+23-10);

let firstName = "Jonas"
console.log(firstName);

//writing a constant in js -> Uppercase the whole variable name
let PI = 3.1415;

let myFirstJob = 'Programmer';

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 12);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;

console.log(typeof year);

console.log(typeof null);
*/

//You can only assign a value to a const 1 time in the program
/*
const birthYear = 1991;
birthYear = 1990;
*/

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);
console.log(ageJonas);
console.log(ageSarah);

console.log(ageJonas * 2, ageJonas / 2, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Schedtmann";

console.log(firstName + '' + lastName);

let x = 10 + 5;
x += 10; // 15 + 10 
console.log(x);
x *=4; // X = X * 4
x++;
x--;
x--;

console.log(x);

//COMPARISON OPERATOR
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(isFullAge);
*/
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25-10-5;// x = Y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);
*/
/****************************************/
/*
const markMass = 78;
const markHeight = 1.69;

const markMass1 = 95;
const markHeight1 = 1.88;

const johnMass = 92;
const johnHeight = 1.95

const johnMass1 = 85;
const johnHeight1 = 1.76;

// markBmi = 78 / (1.69 * 1.69)s
// markBmi = 78 / (1.69 **2)
markBmi = (markMass / (markHeight ** 2)).toFixed(2); 
markBmi1 = (markMass1 / (markHeight1 ** 2)).toFixed(2);
console.log(markBmi, markBmi1);

johnBmi = (johnMass / (johnHeight ** 2)).toFixed(2);
johnBmi1 = (johnMass1 / (johnHeight1 **2)).toFixed(2);

console.log(johnBmi, johnBmi1);

const markHigherBMI = markBmi > johnBmi;
const markHigherBMI1 = markBmi1 > johnBmi1;

console.log(markHigherBMI, markHigherBMI1);
*/
/*
const firstName = 'Jonas';
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

//template literals
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string`);

//multiline strings
console.log('string with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);
*/

/*
const age = 15;
// const isOldEnough = age >= 18;
 
if (age >= 18) {
    console.log('Sarah can start her driving license. 😂');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
    century = 20;    
} else {
    century = 21;    
}
console.log(century);
*/
/*
const markMass = 78;
const markHeight = 1.69;

const markMass1 = 95;
const markHeight1 = 1.88;

const johnMass = 92;
const johnHeight = 1.95

const johnMass1 = 85;
const johnHeight1 = 1.76;

markBmi = (markMass / (markHeight ** 2)).toFixed(2); 
markBmi1 = (markMass1 / (markHeight1 ** 2)).toFixed(2);
console.log(markBmi, markBmi1);

johnBmi = (johnMass / (johnHeight ** 2)).toFixed(2);
johnBmi1 = (johnMass1 / (johnHeight1 **2)).toFixed(2);

console.log(johnBmi, johnBmi1);

const markHigherBMI = markBmi > johnBmi;
const markHigherBMI1 = markBmi1 > johnBmi1;

console.log(markHigherBMI, markHigherBMI1);

if (markHigherBMI === true) {
    console.log(`Mark has a BMI of ${markBmi} witch is higher than John's BMI of ${johnBmi}`);

} else {
    console.log(`John has a BMI of ${johnBmi} witch is higher than Mark's BMI of ${markBmi}`);
}

if (markHigherBMI1 === true) {
    console.log(`Mark has a BMI of ${markBmi} witch is higher than John's BMI of ${johnBmi}`);

} else {
    console.log(`John has a BMI of (${johnBmi}) witch is higher than Mark's BMI of (${markBmi})`);
}
*/

/*
//Type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18); 
console.log(Number('Jonas')); 
console.log(typeof NaN);

console.log(String(231), 231);

//Type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('23' / '2');

let n = '1' + 1;
n = n - 1;
console.log(n);

console.log(2+3+4+'5');
console.log('10'-'4' - '3' - 2 + '5');
*/

// 5 falsy values: 0, '', undefined, null, NaN
//fasly and trujty values

/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));
*/
/*
const money = 100;
if (money) {
    console.log("Don't spend it all ;)");
    
} else {
    console.log("You should go get a job");
}

const money1 = 0;
if (money1) {
    console.log("Don't spend it all ;)");
    
} else {
    console.log("You should go get a job");
}

let height
if (height) {
    console.log('YAY! Height is defined');        
} else{
    console.log('Height is undefined');        
}

let height1 = 123;
if (height1) {
    console.log('YAY! Height is defined');
} else{
    console.log('Height is undefined');
}
*/
/*
const age = 18;
//strict equality operator === -> doesnt do type coersion
if (age === 18) console.log('You just became an adult :D (strict)');
if (age == 18) console.log('You just became an adult :D (loose)');

const age1 = '18';
//strict equality operator === -> doesnt do type coersion
//loose equality operator == -> does type coersion
if (age1 === 18) console.log('You just became an adult :D (strict)');
if (age1 == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if(favourite === 23){ // '23' == 23
    console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7){
    console.log('7 is also a cool number');
} else if (favourite === 9){
    console.log('9 is also a cool number');
} else {
    console.log('Number is not a 7 or 23');
}

if (favourite !== 23) {
    console.log('Why not 23?');
}
*/
// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log('Sarah is able to drive!');

// }else{
//     console.log('Someone else should drive...');

// }

/*
if (hasDriversLicense && hasGoodVision) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}

const isTired = true;
console.log(hasDriversLicense && hasGoodVision && isTired);
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}
*/

/*
dolphinsScoreAverage1 = (97 + 112 + 101) / 3;
console.log(dolphinsScoreAverage1);
koalasScoreAverage1 = (109 + 95 + 123) / 3;
console.log(koalasScoreAverage1);

dolphinsScoreAverage2 = (97 + 112 + 101) / 3;
console.log(dolphinsScoreAverage2);
koalasScoreAverage2 = (109 + 95 + 106) / 3;
console.log(koalasScoreAverage2);

// if (dolphinsScoreAverage > koalasScoreAverage) {
//   console.log("Dolphins have a higher score. They win!");
// } else if (dolphinsScoreAverage === koalasScoreAverage) {
//   console.log("There is a draw. No winner");
// } else {
//   console.log("Koalas have a higher score. They win!");
// }

dolphinsScoreAverage = (96 + 108 + 89) / 3;
koalasScoreAverage = (88 + 91 + 110) / 3;
minRequiredScore = 100;

console.log((dolphinsScoreAverage = 100), (koalasScoreAverage = 105));
// console.log(dolphinsScoreAverage, koalasScoreAverage);
if (
  dolphinsScoreAverage > koalasScoreAverage &&
  dolphinsScoreAverage >= minRequiredScore
) {
  console.log(
    `Dolphins have the highest score with an average of ${dolphinsScoreAverage} points. They win 🏆`
  );
} else if (
  koalasScoreAverage > dolphinsScoreAverage &&
  koalasScoreAverage >= minRequiredScore
) {
  console.log(
    `Koalas have the highest score with an average of ${koalasScoreAverage} points. They win 🏆`
  );
} else if (
  dolphinsScoreAverage === koalasScoreAverage &&
  dolphinsScoreAverage >= minRequiredScore &&
  koalasScoreAverage >= minRequiredScore
) {
  console.log("There is a draw");
} else {
  console.log("There is no winner");
}
*/
/*
const day = "friday";

switch (day) {
  case "monday":
    console.log("Plan my course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Plan my course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
}
*/
/*
const age = 17;
//Conditional operator / terniare operator ? :
age >= 18
  ? console.log("I like to drink wine 🍷")
  : console.log("I like to drink water 💧");

//Terniare operator ? :
const drink = age >= 18 ? "wine🍷" : "water💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine🍷";
} else {
  drink2 = "water💧";
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine🍷" : "water💧"}`);
*/

/*
const bill = 275;
tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(tip);
console.log(
  `The bill was ${bill} euro. Your tip was ${tip}. The total amount was ${bill +
    tip} `
);

const bill1 = 40;
tip1 = bill1 >= 50 && bill <= 300 ? bill1 * 0.15 : bill1 * 0.2;
console.log(tip1);
console.log(
  `The bill was ${bill1} euro. Your tip was ${tip1}. The total amount was ${bill1 +
    tip1} `
);

const bill2 = 430;
tip2 = bill2 >= 50 && bill2 <= 300 ? bill2 * 0.15 : bill2 * 0.2;
console.log(tip2);
console.log(
  `The bill was ${bill2} euro. Your tip was ${tip2}. The total amount was ${bill2 +
    tip2} `
);

*/
