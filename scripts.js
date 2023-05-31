let userWins = 0;
let computerWins = 0;
const choices = ["rock", "paper", "scissors"];
const playerScoreElem = document.getElementById("playerScore");
const computerScoreElem = document.getElementById("computerScore");
const resultMessageElem = document.getElementById("resultMessage");

function playerChoice(userChoice) {
  if (userWins === 3 || computerWins === 3) {
    resetGame();
    return;
  }

  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  let result;
  if (userChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
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

  playerScoreElem.textContent = userWins;
  computerScoreElem.textContent = computerWins;
  resultMessageElem.textContent = `The computer picked ${computerChoice}. ${result}`;

  console.log(
    "You chose " +
      userChoice +
      " and the computer chose " +
      computerChoice +
      ". " +
      result
  );

  if (userWins === 3 || computerWins === 3) {
    endGame();
  }
}

function endGame() {
    let winnerMessage;
    if (userWins === 3 && computerWins === 3) {
      winnerMessage = "It's a tie! The game is a draw.";
    } else if (userWins === 3) {
      winnerMessage = "Congratulations! You won the game!";
    } else {
      winnerMessage = "Oops! You lost the game. Better luck next time!";
    }
    resultMessageElem.textContent = winnerMessage;
  
    disableButtons();
  }

function resetGame() {
  userWins = 0;
  computerWins = 0;
  playerScoreElem.textContent = userWins;
  computerScoreElem.textContent = computerWins;
  resultMessageElem.textContent = "";

  enableButtons();
}

function disableButtons() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

function enableButtons() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.disabled = false;
  });
}

// Initial game setup
enableButtons();
