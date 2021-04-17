
// ## Task 5: Game Loop

// Now that we have a fully functioning game, our next step is to have it run as many times as people would like to play without having to refresh the page.

// Use a `while loop` and `confirm`.

// This will be deemed as complete when a player can keep playing indefinitely and has the option to stop playing after every round.

function playTheGame() {

let playerMove = prompt("Please chose your move: rock, paper or scissors");
console.log(playerMove)

while ((playerMove !== ("rock")) && (playerMove !== ("paper")) && (playerMove !== ("scissors"))) {
    playerMove = prompt("Invalid choice. Please select a valid move: rock, paper or scissors")
}

let moves = ["rock", "paper", "scissors"]

let computerMove = moves[Math.floor(Math.random()*moves.length)];
console.log(computerMove)

function getWinner(player1, player2) {
    if ((player1 === "rock") && (player2 === "rock")) {
        return `0`
    }
    else if ((player1 === "rock") && (player2 === "paper")) {
        return `-1`
    }
    else if ((player1 === "paper") && (player2 === "rock")) {
        return `1`
    }      
    else if ((player1 === "paper") && (player2 === "paper")) {
        return `0`
    }
    else if ((player1 === "scissors") && (player2 === "paper")) {
        return `1`
    }
    else if ((player1 === "paper") && (player2 === "scissors")) {
        return `-1`
    }       
    else if ((player1 === "scissors") && (player2 === "scissors")) {
        return `0`
    }
    else if ((player1 === "scissors") && (player2 === "rock")) {
        return `-1`
    }
    else if ((player1 === "rock") && (player2 === "scissors")) {
        return `1`
    }  
      }
      
    let result = getWinner(playerMove, computerMove);
    alert(`Player move was ${playerMove} and computer move was ${computerMove}. Result is ${result}`);  

    continueToPlay = confirm("Do you want to keep playing?");
}

let continueToPlay = true

while (continueToPlay === true) {
    playTheGame()
}