

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
let rhAttack = document.getElementById("rh_attack");
let blockSound = document.getElementById("block_attack");

let rhTheme = document.getElementById("roboheart_theme");
let victoryTheme = document.getElementById("victory_theme")

rhTheme.volume = 0.6;

let box = document.getElementById("box_text");

let rh_hpBar = document.getElementById("rh_hpBar_filler");
let aubrey_hp = document.getElementById("aubrey_hp");
let hero_hp = document.getElementById("hero_hp");
let omori_hp = document.getElementById("omori_hp");
let kel_hp = document.getElementById("kel_hp");

let rockAttack = document.getElementById("rock_attack");
let sparkles = document.getElementById("sparkles");
let sparkles2 = document.getElementById("sparkles_2");
let pointer = document.getElementById("pointer");
pointer.classList.add("up");

let rh_hp_percent = "100";
let chr_hp_percent = "100";
let currentMenu = 1;
let isVictory = 0;

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
            alert("Omori by Omocat LLC! Buy it now on Steam! \nSparkles animation by Murilo Gama \nRock Paper Scissors by Xie Zhaozhe (206 BCE – 220 CE)\n\nMade by Emiliano Deagustini :)");
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

    
    
    

    console.log(pointer.classList);
});

function calcHP () {
  rh_hp_percent = 100 - playerScore * 20 + "%";
  rh_hpBar.style.width = rh_hp_percent;
  if(rh_hpBar.style.width === "0%"){
    victory();
  }

  chr_hp_percent = 100 - computerScore * 20 + "%";
  aubrey_hp.style.width = chr_hp_percent;
  hero_hp.style.width = chr_hp_percent;
  omori_hp.style.width = chr_hp_percent;
  kel_hp.style.width = chr_hp_percent;
  if(aubrey_hp.style.width === "0%"){
    defeat();
  } else return;
}

function delay (ms) {
  document.getElementById("menu1").style.opacity = "0%";
  document.getElementById("menu2").style.opacity = "0%";
  pointer.className = "";
  pointer.style.opacity = "0%";
  selectSound = "";
  moveSound = "";
  backSound = "";
  if (currentMenu != 4) {
  setTimeout(() => {
    currentMenu = 1;
    moveSound = document.getElementById("move_sound");
    backSound = document.getElementById("back_sound");
    selectSound = document.getElementById("select_sound");
    document.getElementById("menu1").style.opacity = "100%";
    pointer.className = "up";
    pointer.style.opacity = "100%";
    box.textContent = "What will OMORI and friends do?";
  }, ms + "");
  }
}

function protect () {
  blockSound.play();
  sparkles.style.display = "block";
  setTimeout(() => {
    sparkles.style.display = "none";
    blockSound.pause();
    blockSound.currentTime = 0;
  }, "2000");
  delay(2000);
}

function hit () {
  hitSound.play();
  rockAttack.style.display = "block";
  setTimeout(() => {
    rockAttack.style.display = "none";
  }, "400");
  roboheart_sprite.src = "./img/roboheart/roboheart_hit.gif";
  setTimeout(() => {
    hitSound.pause();
    hitSound.currentTime = 0;
    if (isVictory === 0) {
    roboheart_sprite.src = "./img/roboheart/roboheart_neutral.gif";
    }
  }, "1000");
  calcHP();
  delay(2000);
}

function rhHit () {
  rhAttack.play();
  aubrey_sprite.src = "./img/aubrey/aubrey_injured.gif";
  hero_sprite.src = "./img/hero/hero_injured.gif";
  omori_sprite.src = "./img/omori/omori_injured.gif";
  kel_sprite.src = "./img/kel/kel_injured.gif";
  sparkles2.style.display = "block";
  setTimeout(() => {
    if (isVictory === 0) {
    sparkles2.style.display = "none";
    aubrey_sprite.src = "./img/aubrey/aubrey_neutral.gif";
    hero_sprite.src = "./img/hero/hero_neutral.gif";
    omori_sprite.src = "./img/omori/omori_neutral.gif";
    kel_sprite.src = "./img/kel/kel_neutral.gif";
    }
  }, "1500");
  calcHP();
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
    protect();
    return "Roboheart protects from the attack with " + playerSelection;
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
    if (isVictory === 0) {
    return "Roboheart uses " + computerSelection + "! \n Roboheart takes damage!";
    } else return "OMORI's party was victorious!";
  } else {
    computerScore = computerScore + 1;
    rhHit();
    if (isVictory === 0) {
    return "Roboheart counters " + playerSelection + " with " + computerSelection + "! \n Omori party takes damage!";
    } else return "GAME OVER :(";
  }
}

function victory () {
  isVictory = 1;
  currentMenu = 4;
  aubrey_sprite.src = "./img/aubrey/aubrey_victory.gif";
  hero_sprite.src = "./img/hero/hero_victory.gif";
  omori_sprite.src = "./img/omori/omori_victory.gif";
  kel_sprite.src = "./img/kel/kel_victory.gif";
  roboheart_sprite.src = "./img/roboheart/roboheart_defeated.gif";
  rhTheme.pause();
  rhTheme.currentTime = 0;
  victoryTheme.play();
  rhTheme = "";
}

function defeat () {
  isVictory = 1;
  currentMenu = 4;
  aubrey_sprite.src = "./img/aubrey/aubrey_toast.gif";
  hero_sprite.src = "./img/toast.gif";
  omori_sprite.src = "./img/toast.gif";
  kel_sprite.src = "./img/toast.gif";
  rhTheme.pause();
  rhTheme.currentTime = 0;
  rhTheme = "";
}