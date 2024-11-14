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

//addWordToDOM function that will give a random word to the user

let random = Math.floor(Math.random() * words.length) + 1;

function addWordToDOM() {
  random = Math.floor(Math.random() * words.length) + 1;
  document.getElementById("word").innerHTML = words[random];
}

// updateScore function that will increment score by 1 if the answer is right

let scoreCounter = 0;

function updateScore() {
  scoreCounter++;

  document.getElementById("score").innerHTML = scoreCounter;
}

//GameOver function start

let endGameContainer = document.getElementById("end-game-container");

//writing a game over message by creating h1 element inside the end-game-container
let gameOverMsg = document.createElement("h1");
let gameOverMsgText = document.createTextNode("Time ran out");
gameOverMsg.appendChild(gameOverMsgText);
document.getElementById("end-game-container").appendChild(gameOverMsg);

//Showing the final score by creating p element inside the end-game-container
let scoreMsg = document.createElement("p");
// let scoreMsgText = document.createTextNode(
//   "Your final score is "  +scoreCounter
// );
// scoreMsg.appendChild(scoreMsgText);
document.getElementById("end-game-container").appendChild(scoreMsg);

//Realod the game by by creating a realod button element inside the end-game-container
let reloadBtn = document.createElement("BUTTON");
let btnText = document.createTextNode("Realod");
reloadBtn.appendChild(btnText);
document.getElementById("end-game-container").appendChild(reloadBtn);

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

//GameOver function End

//Counting down - timer

const timeOut = setInterval(updateTime, 1000);

let counter = 15;

let time = document.getElementById("time");

function updateTime() {
  document.getElementById("time").innerHTML = counter--;

  if (counter < 0) {
    clearInterval(timeOut);
    gameOver();
  }
}

//Typing words

let input = document.getElementById("text");

let score = document.getElementById("score");

input.focus();

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

let display = 0;

settingBtn = document.getElementById("settings-btn");

settingBtn.addEventListener("click", function () {
  if (display === 1) {
    document.getElementById("settings").style.display = "flex";
    display = 0;
  } else {
    document.getElementById("settings").style.display = "none";
    display = 1;
  }
});

//Game Level

let settingForm = document.getElementById("settings-form");
let difficulty = document.getElementById("difficulty");

difficulty.addEventListener("change", function () {
  let value = difficulty.value;

  if (value == "easy") {
    counter = 15;
    document.getElementById("text").value = "";
    document.getElementById("score").innerHTML = 0;
    scoreCounter = 0;

    scoreCounter;
    addWordToDOM();
    input.focus();
  } else if (value == "medium") {
    counter = 10;
    document.getElementById("text").value = "";
    document.getElementById("score").innerHTML = 0;
    scoreCounter = 0;

    addWordToDOM();
    input.focus();
  } else if (value == "hard") {
    counter = 5;
    document.getElementById("text").value = "";
    document.getElementById("score").innerHTML = 0;
    scoreCounter = 0;

    addWordToDOM();
    input.focus();
  }
});

//OnLoad

time.addEventListener("load", addWordToDOM());

time.addEventListener("load", updateTime());
