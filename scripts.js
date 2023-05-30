function play() {

const choices = ["rock", "paper", "scissors"];
let userWins = 0;
let computerWins = 0;

while (userWins < 3 && computerWins < 3) {
const userChoice = prompt("Do you choose rock, paper or scissors?");
const computerChoice = choices[Math.floor(Math.random() * choices.length)];


let result;
if (userChoice === computerChoice) {
    result = "It's a tie!";
}   else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
) {
    result = "You win that round!";
    userWins++;
} else {
    result = "You lost that round!";
    computerWins++;
}

console.log("You chose " + userChoice + " and the computer chose " + computerChoice + ". " + result);
}
if (userWins === 3) {
    console.log("You won the game!");
}else {
    console.log("You lost the game!");
}
}


play();