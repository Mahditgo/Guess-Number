"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displaymesage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    // document.querySelector(".message").textContent = "No number";
    displaymesage("No Number");
  } else if (guess === secretNumber) {
    displaymesage("correnct number");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displaymesage(guess > secretNumber ? "too high" : "too low");
      guess > secretNumber ? "too high" : "too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displaymesage("you lost the game");
      document.querySelector(".score").textContent = 0;
    }
    // } else if (guess > secretNumber) {
    //   if (score > 1) {
    //     document.querySelector(".message").textContent = "Too high";
    //     score--;
    //     document.querySelector(".score").textContent = score;
    //   } else {
    //     document.querySelector(".message").textContent = "You lost the game";
    //     document.querySelector(".score").textContent = 0;
    //   }
    // } else if (guess < secretNumber) {
    //   if (score > 1) {
    //     document.querySelector(".message").textContent = "Too low";
    //     score--;
    //     document.querySelector(".score").textContent = score;
    //   } else {
    //     document.querySelector(".message").textContent = "You lost the game";
    //     document.querySelector(".score").textContent = 0;
    //   }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  displaymesage("start guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
});
