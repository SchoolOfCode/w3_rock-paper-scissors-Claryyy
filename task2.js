
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