// ## Task 3: User Input

// Using `prompt`, get a user-inputted value for the player move. 
// Then call your function with that value as the player move and the hard-coded computer move. 
// Display the result using `alert`.

// This will be deemed as complete when you can input any move for the player move and hard-code any move for the computer move and see the correct result (1, 0, or -1) in the alert.

let playerMove = prompt("Please chose your move: rock, paper or scissors");
console.log(playerMove)

while (playerMove !== ("rock" || "paper" || "scissors") ) {
    playerMove = prompt("Invalid choice. Please select a valid move: rock, paper or scissors")
}

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
      
      let result = getWinner("scissors", "scissors");
      console.log(result)