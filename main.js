// DOM variables
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

//Game variables 
let gameRoundsPlayed = 0;
let gameWins = 0;
let gameLosses = 0;
let gameDraws = 0;


function getRandomMove() {
    let moves = ["rock", "paper", "scissors"];
    return moves[Math.floor(Math.random()*moves.length)];
}

function startGame() {
    startButton.style.visibility = "hidden";
computerMove = getRandomMove();
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
}

scissorsButton.addEventListener("click", checkScissors)

function continueToPlay() {
    computerMove = getRandomMove();
}

keepPlaying.addEventListener("click", continueToPlay)

// function endGame(){
// startButton.style.visibility = "initial";
// }

// stopPlaying.addEventListener("click", endGame)