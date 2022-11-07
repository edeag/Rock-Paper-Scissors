function getComputerChoice () {
  let rndm = Math.floor(Math.random() * 3) + 1;
  if (rndm === 1) {
    return "rock";
  } else if (rndm === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

let playerScore = 0;
let computerScore = 0;


function playRound (playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  let youLose = "";

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (playerSelection === "rock") {

      youLose = (computerSelection === "paper" ? true : false);

  } else if (playerSelection === "paper") {

      youLose = (computerSelection === "scissors" ? true : false);

  } else if (playerSelection === "scissors") {

      youLose = (computerSelection === "rock" ? true : false);

  } else {
    return "Invalid option, please try again!"
  }

  if (youLose === false) {
    playerScore = playerScore + 1;
    return "You win! " + playerSelection + " beats " + computerSelection;
  } else {
    computerScore = computerScore + 1;
    return "You lose! " + computerSelection + " beats " + playerSelection;
  }
}

function game () {
  /*
  let rounds = prompt("¿How Many Rounds?");
  for (let i = 0; i < rounds; i++) {
    console.log(playRound(prompt("¿Rock, Paper or Scissors?"), getComputerChoice()));
  }
  */
  if (playerScore === computerScore) {
    return "Result: It's a tie! Nobody wins :D"
  } else if (playerScore > computerScore) {
    return "Result: You win! the computer sucks!"
  } else {
    return "Result: You lose! get better kid"
  }
}

document.getElementById("aubrey_sprite").src = "./img/aubrey/aubrey_neutral.gif"
document.getElementById("hero_sprite").src = "./img/hero/hero_neutral.gif"
document.getElementById("omori_sprite").src = "./img/omori/omori_neutral.gif"
document.getElementById("kel_sprite").src = "./img/kel/kel_neutral.gif"

document.getElementById('result').textContent=game();
