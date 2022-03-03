"use strict";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "Correct Number!";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 30;

// //get value .value
// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);~

const maxNumber = 20;
const minNumber = 0;
let maxTries = 20;
const randomGenerator = function() {
  return Math.trunc(Math.random() * 20) + 1;
};
const secretNumber = randomGenerator();
console.log(typeof secretNumber, secretNumber);

document.querySelector(".check").addEventListener("click", function() {
  //trunc -> cut decimal numbers
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  // document.querySelector(".message").textContent = "Correct Number!";
  // falsy value use -> we need a true value now so ! to invert the falsy value
  // 0 is a falsy value // valid input
  //When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "🚫 No number!";
  }
  if (maxTries === 1) {
    document.querySelector(".message").textContent = "Game over";
    document.querySelector(".score").textContent = 0;
  } else if (guess > secretNumber && guess <= maxNumber) {
    document.querySelector(".message").textContent = "Too high!";
    maxTries--;
    document.querySelector(".score").textContent = maxTries;
  } else if (guess < secretNumber && guess >= minNumber) {
    document.querySelector(".message").textContent = "Too low!";
    maxTries--;
    document.querySelector(".score").textContent = maxTries;
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".message").textContent = "Correct Number!";
    document.querySelector(".number").style.width = "30rem";
  } else {
    document.querySelector(".message").textContent =
      "Only numbers between 1 and 20!";
  }
});

document.querySelector(".again").addEventListener("click", function() {
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
