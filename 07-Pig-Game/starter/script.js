"use strict";
// Selecting elements - Difference between querySelector and getElementById
// Scores
const scorePl0 = document.getElementById("score--0");
// const scorePlayer1 = document.querySelector("#score--0");
const curScorePl0 = document.getElementById("current--0");

const scorePl1 = document.getElementById("score--1");
// const scorePlayer2 = document.querySelector("#score--1");
const curScorePl1 = document.getElementById("current--1");
//Buttons
const dice = document.querySelector(".dice");
const rollDice = document.querySelector(".btn--roll");
const hold = document.querySelector(".btn--hold");
const newGame = document.querySelector(".btn--new");

const windowPl0 = document.querySelector(".player--0");
const windowPl1 = document.querySelector(".player--1");

// Starting conditions - This variables are only accessible inside the init scope, this means that eventhandlers cannot get access to them. Thats why they must be declared outside the init function and initialized inside the init funcion to make it work everywhere
let scores, currentScore, activePlayer, playing;

const init = function() {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  scorePl0.textContent = 0;
  scorePl1.textContent = 0;
  curScorePl0.textContent = 0;
  curScorePl1.textContent = 0;
  dice.classList.add("hidden");
  windowPl0.classList.remove("player--winner");
  // Javascript wil not add player--active if its already in the element
  windowPl0.classList.add("player--active");
  windowPl1.classList.remove("player--winner", "player--active");
  windowPl1.classList.remove("player--active");
};

const switchPlayer = function() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  // Toggle will only add the class is the element doesn't contain the same class name otherwise it will remove it
  windowPl0.classList.toggle("player--active");
  windowPl1.classList.toggle("player--active");
};

const randomGenerator = function() {
  return Math.trunc(Math.random() * 6) + 1;
};

init();
// Rolling dice functionality
// Check for rolled 1: if true, switch to next player
rollDice.addEventListener("click", function() {
  if (playing) {
    const randomDice = randomGenerator();
    dice.src = `dice-${randomDice}.png`;
    dice.classList.remove("hidden");
    if (randomDice !== 1) {
      currentScore += randomDice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

hold.addEventListener("click", function() {
  if (playing) {
    // First add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // Check if player's score is >= 100
    if (scores[activePlayer] >= 20) {
      playing = false;
      dice.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      alert(`Player ${activePlayer + 1} won the pig game`);
    } else {
      // Switch to the next player
      switchPlayer();
    }
    // Finish game
  }
});

newGame.addEventListener("click", function() {
  init();
});
