

const OPTIONS = ["Rock", "Paper", "Scissors"];


function getComputerChoice() {
    let index = Math.floor(Math.random()* OPTIONS.length);
    return OPTIONS.at(index);
}


function getHumanChoice() {
    const pmt = prompt("Please provide your choice for the current round (Rock, Paper, Scissors)");
    console.log(`user input is ${pmt}`);

    if (OPTIONS.includes(pmt)) {
        return pmt;
    }

    console.log("User input is not one of legal options. Try again.");
    return getHumanChoice();
    
}
console.log(getHumanChoice());


function play() {
    let playerScore = 0;
    let computerScore = 0;

}