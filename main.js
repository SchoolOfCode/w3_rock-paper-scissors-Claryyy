// DOM variables
const username = document.querySelector("username");
const submitButton = document.querySelector(".submitButton");
const startButton = document.querySelector(".startGameButton");
const roundsPlayed = document.querySelector(".roundsPlayed");
const wins = document.querySelector(".wins");
const losses = document.querySelector(".losses");
const draws = document.querySelector(".draws");
const rockButton = document.querySelector(".rockButton");
const paperButton = document.querySelector(".paperButton");
const scissorsButton = document.querySelector(".scissorsButton");
const thisRoundResult = document.querySelector(".thisRoundResult");
const keepPlaying = document.querySelector(".keepPlaying");
const stopPlaying = document.querySelector(".stopPlaying");
const game = document.querySelector(".game");
// const encore = document.querySelector(".encore");

//Game variables 
let gameRoundsPlayed = 0;
let gameWins = 0;
let gameLosses = 0;
let gameDraws = 0;
let gameUsername = "";
let computerMove = "";
let newComputerMove = "";

game.style.visibility = "hidden";
// encore.style.visibility = "hidden";

function usernameForm () {
    let usernameInput = document.getElementById("username-input");
    let username = usernameInput.value;
  
    if (username.length > 10) {
      alert("Your username must be 10 or fewer characters");
username = usernameInput.value;
    } else if (!username[0].match(/[a-zA-Z]/)) {
      alert("Your username must begin with a letter. Numbers or special characters are not allowed.");

    } else if (username[0].match(/[a-z]/)) {
      alert("Your username must begin with an uppercase letter");

    } else {
      gameUsername = username;
    }
  
    let form = document.getElementById("form");
    form.style.display = "none";
  
    username.innerText = `Player: ${gameUsername}`;
    username.style.display = "block";
  }

submitButton.addEventListener("click", usernameForm);

  // Add enter keydown listener
document.getElementById('username-input').addEventListener(
    'keydown',
    (event) => {
      if (event.defaultPrevented) {
        return;
      }
      if (event.key === 'Enter') {
        console.log('enter event listener');
        formSubmit();
      }
      event.preventDefault;
    },
    false
  );


function getRandomMove() {
    let moves = ["rock", "paper", "scissors"];
    return moves[Math.floor(Math.random()*moves.length)];
}

function startGame() {
    startButton.style.visibility = "hidden";
computerMove = getRandomMove();
game.style.visibility = "visible";
// encore.style.visibility = "hidden";
}

startButton.addEventListener("click", startGame)

function checkRock() {
    if (computerMove === "rock") {
gameDraws ++;
thisRoundResult.innerText = "It's a draw. You both played Rock.";
draws.innerText = `Draws: ${gameDraws}`;
    }
if (computerMove === "paper") {
    gameLosses ++;
    thisRoundResult.innerText = "You lost. The computer played Paper against your Rock.";
    losses.innerText = `Rounds lost: ${gameLosses}`;
}
if (computerMove === "scissors") {
    gameWins ++;
    thisRoundResult.innerText = "You won! The computer played Scissors against your Rock.";
    wins.innerText = `Rounds won: ${gameWins}`;
}
gameRoundsPlayed ++;
roundsPlayed.innerText = `Rounds played: ${gameRoundsPlayed}`;
// encore.style.visibility = "visible";
}

rockButton.addEventListener("click", checkRock)

function checkPaper() {
    if (computerMove === "paper") {
        gameDraws ++;
thisRoundResult.innerText = "It's a draw. You both played Paper.";
draws.innerText = `Draws: ${gameDraws}`;
    }
if (computerMove === "scissors") {
    gameLosses ++;
    thisRoundResult.innerText = "You lost. The computer played Scissors against your Paper.";
    losses.innerText = `Rounds lost: ${gameLosses}`;
}
if (computerMove === "rock") {
    gameWins ++;
    thisRoundResult.innerText = "You won! The computer played Rock against your Paper.";
    wins.innerText = `Rounds won: ${gameWins}`;
}
gameRoundsPlayed ++;
roundsPlayed.innerText = `Rounds played: ${gameRoundsPlayed}`;
// encore.style.visibility = "visible";
}

paperButton.addEventListener("click", checkPaper)

function checkScissors() {
    if (computerMove === "scissors") {
        gameDraws ++;
thisRoundResult.innerText = "It's a draw. You both played Scissors.";
draws.innerText = `Draws: ${gameDraws}`;
    }
if (computerMove === "rock") {
    gameLosses ++;
    thisRoundResult.innerText = "You lost. The computer played Rock against your Scissors.";
    losses.innerText = `Rounds lost: ${gameLosses}`;
}
if (computerMove === "paper") {
    gameWins ++;
    thisRoundResult.innerText = "You won! The computer played Paper against your Scissors.";
    wins.innerText = `Rounds won: ${gameWins}`;
}
gameRoundsPlayed ++;
roundsPlayed.innerText = `Rounds played: ${gameRoundsPlayed}`;
// encore.style.visibility = "visible";
}

scissorsButton.addEventListener("click", checkScissors)

function continueToPlay() {
    newComputerMove = getRandomMove();
    computerMove = newComputerMove;
    // encore.style.visibility = "hidden";
}

keepPlaying.addEventListener("click", continueToPlay)

function endGame() {
startButton.style.visibility = "visible";
game.style.visibility = "hidden";
// encore.style.visibility = "hidden";
}

stopPlaying.addEventListener("click", endGame)