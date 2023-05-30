function play(userChoice) {

const choices = ["rock", "paper", "scissors"];
const computerChoice = choices[Math.floor(Math.random() * choices.length)];

let result;
if (userChoice === computerChoice) {
    result = "It's a tie!";
}   else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
) {
    result = "You are victorious!";
} else {
    result = "You lost to the computer!";
}

console.log("You chose " + userChoice + " and the computer chose " + computerChoice + ". " + result);


}