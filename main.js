const levels = {
  easy: 7,
  medium: 5,
  hard: 3,
};

const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

const words = [
  "javascript",
  "computer",
  "apple",
  "unicorn",
  "grass",
  "window",
  "door",
  "smartphone",
  "watch",
  "jacket",
  "switch",
  "light",
  "egg",
  "salmon",
  "soap",
  "rain",
  "winter"
];

const wordInput = document.getElementById("word-input");
const currentWord = document.getElementById("current-word");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const message = document.getElementById("message");
const seconds = document.getElementById("seconds");

window.addEventListener("load", initializeGame);
function initializeGame() {
  document.getElementById("seconds").innerHTML = currentLevel;
  showWord(words);

  wordInput.addEventListener("input", startMatch);

  setInterval(countdown, 1000);
  setInterval(checkStatus, 50);
}

function showWord(words) {
  const randomIndex = Math.floor(Math.random() * words.length);

  currentWord.innerHTML = words[randomIndex];
}

function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = "";
    score++;
  }

  if (score == -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

function matchWords() {
  if (wordInput.value === currentWord.textContent) {
    message.innerHTML = "Correct!!!";
    message.style.color = "green";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}
function countdown() {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }

  timeDisplay.innerHTML = time;
}

function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over!!!";
    message.style.color = "red";
    score = -1;
  }
}
