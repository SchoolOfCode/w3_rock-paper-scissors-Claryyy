// ## Task 4: Computer Player

// Write a function that generates a random computer move. 
// Use that function to make a dynamic game where the computer move is randomly chosen every time instead of being hard-coded.

// <details>
// <summary>Hint</summary>
// `Math.random()` might be useful!
// </details>

// This will be deemed as complete when the player can input any move in the prompt, the computer move is chosen by random, and the correct result shows in the alert.

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
    alert(result);  