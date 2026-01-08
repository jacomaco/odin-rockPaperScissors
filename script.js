console.log(getComputerChoice());
console.log(getHumanChoice())

function getComputerChoice() {
  let numberOfHands = 3;
  let hand = Math.floor(Math.random() * numberOfHands + 1);
  return selectHand(hand);
}

function getHumanChoice() {
    return selectHand(parseInt(prompt("Choose your hand; rock: 1, paper: 2, scissor: 3", 1)));
}

function selectHand(hand) {
  switch (hand) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors";
      break;
    default:
      return "rock";
      break;
  }
}
