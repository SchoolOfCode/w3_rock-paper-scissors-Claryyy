let playerMove = "scissors";
let computerMove = "paper";
console.log(playerMove)
console.log(computerMove)

if ((playerMove === "rock") && (computerMove === "rock")) {
    console.log("It's a draw")
// return draw
}
else if ((playerMove === "rock") && (computerMove === "paper")) {
    console.log("Computer wins")
    // return computerWins
}
else if ((playerMove === "paper") && (computerMove === "rock")) {
    console.log("Player wins")
    // return playerWins
}      
else if ((playerMove === "paper") && (computerMove === "paper")) {
    console.log("It's a draw")
    // return draw
}
else if ((playerMove === "scissors") && (computerMove === "paper")) {
    console.log("Player wins")
    // return playerWins
}
else if ((playerMove === "paper") && (computerMove === "scissors")) {
    console.log("Computer wins")
    // return computerWins
}       
else if ((playerMove === "scissors") && (computerMove === "scissors")) {
    console.log("It's a draw")
    // return draw
}
else if ((playerMove === "scissors") && (computerMove === "rock")) {
    console.log("Computer wins")
    // return computerWins
}
else if ((playerMove === "rock") && (computerMove === "scissors")) {
    console.log("Player wins")
    // return playerWins
}  