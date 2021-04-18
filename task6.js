// ## Task 6: Scores

// Keep track of how many games have been played, as well as the number of wins, losses, and draws.

// This will be deemed as complete when this information is displayed after each round.
let gamesPlayed = 0;
    let wins = 0;
    let draws = 0;
    let losses = 0;

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
            draws ++;
            return `0`
        }
        else if ((player1 === "rock") && (player2 === "paper")) {
            losses ++;
            return `-1`
        }
        else if ((player1 === "paper") && (player2 === "rock")) {
            wins ++;
            return `1`
        }      
        else if ((player1 === "paper") && (player2 === "paper")) {
            draws ++;
            return `0`
        }
        else if ((player1 === "scissors") && (player2 === "paper")) {
            wins ++;
            return `1`
        }
        else if ((player1 === "paper") && (player2 === "scissors")) {
            losses ++;
            return `-1`
        }       
        else if ((player1 === "scissors") && (player2 === "scissors")) {
            drwas ++;
            return `0`
        }
        else if ((player1 === "scissors") && (player2 === "rock")) {
            losses ++;
            return `-1`
        }
        else if ((player1 === "rock") && (player2 === "scissors")) {
            wins ++;
            return `1`
        }  
          }
        
        gamesPlayed ++;  
          
        let result = getWinner(playerMove, computerMove);
        alert(`You played ${playerMove} and the computer move was ${computerMove}. Result is ${result}. ${gamesPlayed} games played so far. You have won ${wins} times, lost ${losses} times and it's been a draw ${draws} times.`);  
    
        continueToPlay = confirm("Do you want to keep playing?");
    }
    
    let continueToPlay = true
    
    while (continueToPlay === true) {
        playTheGame()
    }