const OPTIONS = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

const counter = document.createElement("div");
counter.className = "counter";
counter.textContent = `Player score = ${playerScore} ----- Computer score = ${computerScore}`;
document.body.appendChild(counter);

function getComputerChoice() {
    let index = Math.floor(Math.random()* OPTIONS.length);
    return OPTIONS.at(index);
}


function playRound(hChoice) {
    const cChoice = getComputerChoice();


    if (cChoice === hChoice) {
        alert("Draw. No points added");
    } else if (
        (cChoice === "rock" && hChoice === "paper") ||
        (cChoice === "paper" && hChoice === "scissors") ||
        (cChoice === "scissors" && hChoice === "rock")
    ) {
        alert("Player won this round!");
        playerScore +=1;
    } else {
        alert("Computer won this round!");

        computerScore +=1;
    }
    counter.textContent = `Player score = ${playerScore} ----- Computer score = ${computerScore}`;
    return;

}

function initButtons() {
    const container = document.createElement("div");
    container.className = "container";
    container.style.display = "flex"; 
    container.style.justifyContent = "space-evenly"; 
    container.style.alignItems = "center"; 
    container.style.padding = "20px";

    const scissors = document.createElement("button");
    scissors.value = "scissors";
    scissors.className = "button";
    scissors.textContent = "Scissors";

    const paper = document.createElement("button");
    paper.className = "button";
    paper.value = "paper";
    paper.textContent = "Paper";

    const rock = document.createElement("button");
    rock.className = "button";
    rock.value = "rock";
    rock.textContent = "Rock";

    container.appendChild(scissors);
    container.appendChild(paper);
    container.appendChild(rock);
    document.body.insertBefore(container, document.body.firstChild);
    return container;
}

function resetScore() {
    let playerScore = 0;
    let computerScore = 0;
    counter.textContent = `Player score = ${playerScore} ----- Computer score = ${computerScore}`;
}
function playGame() {

    const container = initButtons();

    container.addEventListener("click", (event) => {
        if (event.target.tagName === "BUTTON") {
            playRound(event.target.value);
        }

        if (playerScore === 5) {
            alert("Player won the game!!!");
            resetScore();
        } else if (computerScore === 5) {
            alert("Computer won the game!!!");
            resetScore();
        }
    });

    
}

playGame();