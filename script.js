let humanScore = 0;
let computerScore = 0;

playGame();

function playGame() {
    humanScore = 0;
    computerScore = 0;

    // Create display area
    const div = document.createElement("div");
    div.id = "display";
    document.body.appendChild(div);

    // Create result display area
    const resultDiv = document.createElement("div");
    resultDiv.id = "result";
    document.body.appendChild(resultDiv);

    // Add UI interactivity
    const rockButton = document.createElement("button");
    const paperButton = document.createElement("button");
    const scissorsButton = document.createElement("button");

    rockButton.addEventListener("click", (e) => {
        playRound("rock", getComputerChoice());
    });
    paperButton.addEventListener("click", (e) => {
        playRound("paper", getComputerChoice());
    });
    scissorsButton.addEventListener("click", (e) => {
        playRound("scissors", getComputerChoice());
    });

    rockButton.textContent = "Rock";
    paperButton.textContent = "Paper";
    scissorsButton.textContent = "Scissors";

    document.body.appendChild(rockButton);
    document.body.appendChild(paperButton);
    document.body.appendChild(scissorsButton);

    rockButton.classList.add("btn");
    paperButton.classList.add("btn");
    scissorsButton.classList.add("btn");
}

function getComputerChoice() {
    let numberOfHands = 3;
    let hand = Math.floor(Math.random() * numberOfHands) + 1;
    return selectHand(hand);
}

function getHumanChoice() {
    let choice = prompt("Choose your hand: ", "rock").toLowerCase();
    return choice === "rock" || choice === "paper" || choice === "scissors"
        ? choice
        : "invalid hand";
}

function selectHand(hand) {
    switch (hand) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            return "rock";
    }
}

function playRound(humanChoice, computerChoice) {
    // handle invalit humanChoice
    if (humanChoice === "invalid hand") {
        console.error("invalid hand");
        return;
    }
    let humanResult = capitalize(humanChoice);
    let computerResult = capitalize(computerChoice);

    if (humanChoice === computerChoice) {
        draw(humanResult, computerResult);
        return;
    }

    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
        ? win(humanResult, computerResult)
        : loss(humanResult, computerResult);
}

function win(humanChoice, computerChoice) {
    humanScore++;
    displayState(humanChoice, computerChoice, "You won this round!");
    checkGameWinner();
}
function draw(humanChoice, computerChoice) {
    displayState(humanChoice, computerChoice, "It's a draw!");
}
function loss(humanChoice, computerChoice) {
    computerScore++;
    displayState(humanChoice, computerChoice, "Computer won this round!");
    checkGameWinner();
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function displayState(humanChoice, computerChoice, roundResult) {
    const div = document.querySelector("#display");
    div.innerHTML =
        `<strong>Current Score:</strong> Player: ${humanScore} | Computer: ${computerScore} <br>` +
        `You chose: ${humanChoice} | Computer chose: ${computerChoice} <br>` +
        `<strong>${roundResult}</strong>`;
}

function checkGameWinner() {
    if (humanScore === 5) {
        const resultDiv = document.querySelector("#result");
        resultDiv.textContent = "🎉 You reached 5 points! You are the winner!";
        disableGameButtons();
    } else if (computerScore === 5) {
        const resultDiv = document.querySelector("#result");
        resultDiv.textContent = "💻 Computer reached 5 points! Computer wins!";
        disableGameButtons();
    }
}

function disableGameButtons() {
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(btn => btn.disabled = true);
}
