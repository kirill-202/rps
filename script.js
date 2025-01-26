const OPTIONS = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let index = Math.floor(Math.random()* OPTIONS.length);
    return OPTIONS.at(index);
}


function getHumanChoice() {
    let pmt = prompt("Please provide your choice for the current round (Rock, Paper, Scissors)");
    pmt =  pmt.toLowerCase();
    console.log(`user input is ${pmt}`);

    if (OPTIONS.includes(pmt)) {
        return pmt;
    }

    console.log("User input is not one of legal options. Try again.");
    return getHumanChoice();
    
}


function playRound() {
    const cChoice = getComputerChoice();
    const hChoice = getHumanChoice();

    if (cChoice === hChoice) {
        console.log("Draw. No points added")
    } else if (
        (cChoice === "rock" && hChoice === "paper") ||
        (cChoice === "paper" && hChoice === "scissors") ||
        (cChoice === "scissors" && hChoice === "rock")
    ) {
        console.log("Player won!");
        console.log(`Player: ${hChoice}\nComputer: ${cChoice}`);
        playerScore +=1;
    } else {
        console.log("Coputer won!");
        console.log(`Player: ${hChoice}\nComputer: ${cChoice}`);
        computerScore +=1;
    }
    console.log("Round has finished.");
    return;

}


function playGame() {
    const maxScore = 5;
    while (playerScore < maxScore && computerScore < maxScore) {
        playRound();
        console.log(`Current score - Computer: ${computerScore} - Player: ${playerScore}`);
    }
    
    if (playerScore === maxScore) {
        console.log("Player wins the game!");
    } else {
        console.log("Computer wins the game!");
    }
    return;
}

playGame();