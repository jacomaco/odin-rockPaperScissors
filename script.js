let humanScore = 0;
let computerSocre = 0;

// 1 round
playRound(getHumanChoice(), getComputerChoice());

function getComputerChoice() {
    let numberOfHands = 3;
    let hand = Math.floor(Math.random() * numberOfHands + 1);
    return selectHand(hand);
}

function getHumanChoice() {
    let choice = prompt("Choose your hand: ", "rock").toLowerCase();
    return choice === "rock" || choice === "paper" || choice === "scissors" ? choice : "invalid hand";
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
    }
    let humanResult = capitalize(humanChoice);
    let computerResult = capitalize(computerChoice);

    if (humanChoice === computerChoice) {
        draw(humanResult, computerResult);
    } 

    (humanChoice === "rock" && computerChoice == "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissor" && computerChoice === "rock") ? win(humanResult, computerResult) : loss(humanResult, computerResult);
}

function win(humanChoice, computerChoice) {
    console.log(`You choose: ${humanChoice}`);
    console.log(`Computer choose: ${computerChoice}`)
    console.log("You won!");
}
function draw(humanChoice, computerChoice) {
    console.log(`You choose: ${humanChoice}`);
    console.log(`Computer choose: ${computerChoice}`)
    console.log("It's a draw!");
}
function loss(humanChoice, computerChoice) {
    console.log(`You choose: ${humanChoice}`);
    console.log(`Computer choose: ${computerChoice}`)
    console.log("Computer won!");
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}