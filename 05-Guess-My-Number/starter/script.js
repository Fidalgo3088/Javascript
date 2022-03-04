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
let highScore = 0;
let maxTries = 20;
const displayMessage = function(message) {
  document.querySelector(".message").textContent = message;
};
s;
const displayNumber = function(number) {
  document.querySelector(".number").textContent = number;
};
const displayScore = function(score) {
  document.querySelector(".score").textContent = score;
};
const randomGenerator = function() {
  //trunc -> cut decimal numbers
  return Math.trunc(Math.random() * 20) + 1;
};
// console.log(typeof secretNumber, secretNumber);
let secretNumber = randomGenerator();

document.querySelector(".check").addEventListener("click", function() {
  const guess = Number(document.querySelector(".guess").value);
  // We need a true value now so ! to invert the falsy value
  // 0 is a falsy value // valid input check || When there is no input
  if (!guess) {
    displayMessage("🚫 No number!");
  } else if (guess !== secretNumber) {
    if (maxTries > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      maxTries--;
      displayScore(maxTries);
    } else {
      displayMessage("Game over");
      displayScore(0);
    }
  } else if (guess === secretNumber) {
    displayNumber(secretNumber);
    document.querySelector("body").style.backgroundColor = "#60b347";
    displayMessage("🎉Correct guess!");
    document.querySelector(".number").style.width = "30rem";
    if (maxTries > highScore) {
      highScore = maxTries;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else {
    displayMessage("Only numbers between 1 and 20 allowed!");
  }
});

document.querySelector(".again").addEventListener("click", function() {
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  displayNumber("?");
  document.querySelector(".guess").value = "";
  displayScore(20);
  displayMessage("Start guessing...");
  secretNumber = randomGenerator();
  maxTries = 20;
});
