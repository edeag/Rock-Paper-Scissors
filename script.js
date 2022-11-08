

function game () {
  if (playerScore === computerScore) {
    return "Result: It's a tie! Nobody wins :D"
  } else if (playerScore > computerScore) {
    return "Result: You win! the computer sucks!"
  } else {
    return "Result: You lose! get better kid"
  }
}

let aubrey_sprite = document.getElementById("aubrey_sprite");
aubrey_sprite.src = "./img/aubrey/aubrey_neutral.gif";
let hero_sprite = document.getElementById("hero_sprite");
hero_sprite.src = "./img/hero/hero_neutral.gif";
let omori_sprite = document.getElementById("omori_sprite");
omori_sprite.src = "./img/omori/omori_neutral.gif";
let kel_sprite = document.getElementById("kel_sprite");
kel_sprite.src = "./img/kel/kel_neutral.gif";

let roboheart_sprite = document.getElementById("roboheart_sprite")
roboheart_sprite.src = "./img/roboheart/roboheart_neutral.gif";

let moveSound = document.getElementById("move_sound");
let selectSound = document.getElementById("select_sound");
let backSound = document.getElementById("back_sound");
let hitSound = document.getElementById("hit_sound");
let rhTheme = document.getElementById("roboheart_theme");
let victoryTheme = document.getElementById("victory_theme")

rhTheme.volume = 0.6;

let box = document.getElementById("box_text");

let rh_hpBar = document.getElementById("rh_hpBar_filler");

let rockAttack = document.getElementById("rock_attack");
let pointer = document.getElementById("pointer");
pointer.classList.add("up");

let rh_hp_percent = "100";
let currentMenu = 1;

window.addEventListener("keydown", function(e){
    rhTheme.play();
    switch(e.key) {
      case "ArrowDown":
        moveSound.play();
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
        moveSound.play();
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
        moveSound.play();
        if(pointer.classList.contains("left_up")){
          pointer.className = "right_up";
          break;
        } else if (pointer.classList.contains("left_down")){
          pointer.className = "right_down";
          break;
        } else break;

      case "ArrowLeft":
        moveSound.play();
        if(pointer.classList.contains("right_up")){
          pointer.className = "left_up";
          break;
        } else if(pointer.classList.contains("right_down")){
          pointer.className = "left_down";
          break;
        } else break;

      case "z":
        selectSound.play();
        if(pointer.classList.contains("up")){
          pointer.className = "left_up";
          document.getElementById("menu1").style.opacity = "0%";
          document.getElementById("menu2").style.opacity = "100%";
          currentMenu = 2;
          break;
        } else if (pointer.classList.contains("down")){
            alert("show credits :p");
            break;
        } else if(pointer.classList.contains("left_up")) {
            box.textContent = (playRound("rock", getComputerChoice()));
            break;
        } else if(pointer.classList.contains("left_down")){
          box.textContent = (playRound("scissors", getComputerChoice()));
            break;
        } else if(pointer.classList.contains("right_up")){
          box.textContent = (playRound("paper", getComputerChoice()));
            break;
        } else if(pointer.classList.contains("right_down")){
          box.textContent = (playRound(getComputerChoice(), getComputerChoice()));
            break;
        } else break;

      case "x":
        backSound.play();
        if(currentMenu === 2){
          pointer.className = "up";
          document.getElementById("menu1").style.opacity = "100%";
          document.getElementById("menu2").style.opacity = "0%";
          currentMenu = 1;
          break;
        } else break;
      case "a":
        break;
    }

    
    
    rh_hp_percent = 100 - playerScore * 20 + "%";
    rh_hpBar.style.width = rh_hp_percent;
    if(rh_hpBar.style.width === "0%"){
      victory();
    } else return;

    console.log(pointer.classList);
});

function delay (ms) {
  document.getElementById("menu1").style.opacity = "0%";
  document.getElementById("menu2").style.opacity = "0%";
  pointer.className = "";
  pointer.style.opacity = "0%";
  setTimeout(() => {
    document.getElementById("menu1").style.opacity = "100%";
    pointer.className = "up";
    pointer.style.opacity = "100%";
  }, ms + "");
}

function hit(){
  hitSound.play();
  rockAttack.style.display = "block";
  setTimeout(() => {
    rockAttack.style.display = "none";
  }, "400");
  roboheart_sprite.src = "./img/roboheart/roboheart_hit.gif";
  setTimeout(() => {
    roboheart_sprite.src = "./img/roboheart/roboheart_neutral.gif";
  }, "1000");
  delay(2000);
}

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
let selection = "";

function playRound (playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  let youLose = "";

  if (playerSelection === computerSelection) {
    return "Roboheart blocks the attack with a " + playerSelection;
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
    hit();
    return "Roboheart fails to protect from the attack due to utilizing " + computerSelection + "! \n Roboheart takes damage!";
  } else {
    computerScore = computerScore + 1;
    return "Roboheart counters " + playerSelection + " with " + computerSelection + "! \n Omori party takes damage!";
  }
}

function victory () {
  aubrey_sprite.src = "./img/aubrey/aubrey_victory.gif";
  hero_sprite.src = "./img/hero/hero_victory.gif";
  omori_sprite.src = "./img/omori/omori_victory.gif";
  kel_sprite.src = "./img/kel/kel_victory.gif";
  setTimeout(() => {
    roboheart_sprite.src = "./img/roboheart/roboheart_defeated.gif";
  }, "1000");
  rhTheme.pause();
  rhTheme.currentTime = 0;
  victoryTheme.play();
  
}