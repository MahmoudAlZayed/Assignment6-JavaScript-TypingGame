// Variables for the DOM elements

// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];
//Declaring variables for addWordToDom function
let random = Math.floor(Math.random() * words.length);
let showRandomWord = document.getElementById("word");

//Declaring variables for updateScore function
let scoreCounter = 0;
let score = document.getElementById("score");

//Declaring variables for gameOver function
let endGameContainer = document.getElementById("end-game-container");

//Declaring variables for gameOver function : writing a game over message by creating h1 element inside the end-game-container
let gameOverMsg = document.createElement("h1");
let gameOverMsgText = document.createTextNode("Time ran out");
gameOverMsg.appendChild(gameOverMsgText);
document.getElementById("end-game-container").appendChild(gameOverMsg);

//Declaring variables for gameOver function:Showing the final score by creating p element inside the end-game-container
let scoreMsg = document.createElement("p");
document.getElementById("end-game-container").appendChild(scoreMsg);

//Declaring variables for gameOver function : Realod the game by by creating a realod button element inside the end-game-container
let reloadBtn = document.createElement("BUTTON");
let btnText = document.createTextNode("Realod");
reloadBtn.appendChild(btnText);
document.getElementById("end-game-container").appendChild(reloadBtn);

//Declaring variables for updatreTime function

const timeOut = setInterval(updateTime, 1000);

let counter = 15;

let time = document.getElementById("time");

//Declaring variables for typing words

let input = document.getElementById("text");

//Declaring variables for Hide-Show setting

let display = false;

let settingBtn = document.getElementById("settings-btn");
let settingContainer = document.getElementById("settings");

//Declaring variables for Game Level

let settingForm = document.getElementById("settings-form");
let difficulty = document.getElementById("difficulty");

//addWordToDOM function that will give a random word to the user

function addWordToDOM() {
  random = Math.floor(Math.random() * words.length);
  showRandomWord.innerHTML = words[random];
}

// updateScore function that will increment score by 1 if the answer is right

function updateScore() {
  scoreCounter++;
  score.innerHTML = scoreCounter;
}

//GameOver Function
function gameOver() {
  endGameContainer.style.display = "flex";
  let scoreMsgText = document.createTextNode(
    "Your final score is " + scoreCounter
  );
  scoreMsg.appendChild(scoreMsgText);
}

reloadBtn.addEventListener("click", function () {
  location.reload();
});

//updateTime function : Counting down - timer

function updateTime() {
  time.innerHTML = counter--;

  if (counter < 0) {
    clearInterval(timeOut);
    gameOver();
  }
}

//Typing words

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    if (this.value === words[random]) {
      // console.log("correct");
      this.value = "";
      updateScore();
      counter += 5;
      addWordToDOM();
    } else {
      // console.log("false");
      this.value = "";
      addWordToDOM();
    }
  }
});

//Hide-Show setting

settingBtn.addEventListener("click", function () {
  if (display === true) {
    settingContainer.style.display = "flex";
    display = false;
  } else {
    settingContainer.style.display = "none";
    display = true;
  }
});

//Game Level

difficulty.addEventListener("change", function () {
  let value = difficulty.value;

  if (value == "easy") {
    counter = 15;
    input.value = "";
    score.innerHTML = 0;
    scoreCounter = 0;

    scoreCounter;
    addWordToDOM();
    input.focus();
  } else if (value == "medium") {
    counter = 10;
    input.value = "";
    score.innerHTML = 0;
    scoreCounter = 0;

    addWordToDOM();
    input.focus();
  } else if (value == "hard") {
    counter = 5;
    input.value = "";
    score.innerHTML = 0;
    scoreCounter = 0;

    addWordToDOM();
    input.focus();
  }
});

addWordToDOM();
input.focus();
