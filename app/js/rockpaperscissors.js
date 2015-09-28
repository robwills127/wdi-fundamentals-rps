////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

var move;
var playerMove;
var computerMove;
var winner;
var playerWins;
var computerWins;



function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || 'getInput()';
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || 'randomPlay()';
}

function getWinner(playerMove,computerMove) {
    playerMove = getPlayerMove();
    computerMove = getComputerMove();
    if (playerMove === computerMove){
        console.log('player chose ' + playerMove + ', computer chose ' + computerMove);
        winner = 'tie';
    } else if ((playerMove === 'paper' && computerMove === 'rock') || (playerMove === 'rock' && computerMove === 'scissors') || (playerMove === 'scissors' && computerMove === 'paper')) {
        console.log('player chose ' + playerMove + ', computer chose ' + computerMove);
        winner = 'player';
    } else {
        console.log('player chose ' + playerMove + ', computer chose ' + computerMove);
       winner = 'computer';
    }
    console.log('the winner is ' + winner);
    return winner;
}
         // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while ((playerWins < 5) && (computerWins < 5 )) {
        getWinner();
        if (winner === "player") {
            console.log("Player scores a point");
            playerWins += 1;
        } 
        if (winner === 'computer') {
        console.log("The computers scores a point.");
            computerWins += 1;
        }
        console.log("Player has " + playerWins + "points and the computer has " + computerWins + "points");
    }
return [playerWins, computerWins];
}
    

    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */


