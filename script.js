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

// 700px down / 645 up
const pointer = document.getElementById("pointer");
pointer.classList.add("up");

let currentMenu = 1;

window.addEventListener("keydown", function(e){
  /*
  if (e.key === "ArrowDown") {
    pointer.className = '';
    pointer.classList.add("down");
  } else if (e.key === "ArrowUp") {
    pointer.className = '';
    pointer.classList.add("up");
  }
  */
    
    switch(e.key) {
      case "ArrowDown":
        if(pointer.classList.contains("up")){
          pointer.className = "down";
          break;
        } else if(pointer.classList.contains("left_up")){
            pointer.className = "left_down";
            break;
        } else if (pointer.classList.contains("right_up")){
            pointer.className = "right_down";
            break;
        } else break;

      case "ArrowUp":
        if(pointer.classList.contains("down")){
          pointer.className = "up";
          break;
        } else if(pointer.classList.contains("left_down")){
            pointer.className = "left_up";
            break;
          } else if(pointer.classList.contains("right_down")){
            pointer.className = "right_up";
            break;
          } else break;

      case "ArrowRight":
        if(pointer.classList.contains("left_up")){
          pointer.className = "right_up";
          break;
        } else if (pointer.classList.contains("left_down")){
          pointer.className = "right_down";
          break;
        } else break;
      case "ArrowLeft":
        if(pointer.classList.contains("right_up")){
          pointer.className = "left_up";
          break;
        } else if(pointer.classList.contains("right_down")){
          pointer.className = "left_down";
          break;
        } else break;
      case "z":
        if(currentMenu === 1){
          pointer.className = "left_up";
          document.getElementById("menu1").style.opacity = "0%";
          document.getElementById("menu2").style.opacity = "100";
          currentMenu = 2;
          break;
        } else if(currentMenu === 2) {
          break;
        }
      case "x":

        break;
      case "a":
        console.log(pointer.className);
        break;
    }
    console.log(pointer.classList);
});