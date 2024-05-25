const Rock = document.getElementById("Rock");
const Paper = document.getElementById("Paper");
const Scissors = document.getElementById("Scissors");
const screen = document.getElementById("value");
const MysteryBox = ["Rock", "Paper", "Scissors"];
const scoreBoard = document.getElementById("scoreBoard");
const scoreBoardCom = document.getElementById("scoreBoardCom");
const addedValue = document.getElementById("addedvalue");
let score = 0;
let ComputerScore = 0;

Rock.addEventListener("click", () => {
  screen.style.display = "block";
  // addedValue.style.display = "block";
});
Paper.addEventListener("click", () => {
  screen.style.display = "block";
  // addedValue.style.display = "block";
});
Scissors.addEventListener("click", () => {
  screen.style.display = "block";
  // addedValue.style.display = "block";
});
function chooseCharacter(value) {
  const randomElement = Math.floor(Math.random() * 3);
  if (value === "Rock") {
    switch (randomElement) {
      case 0:
        screen.textContent = `It's a Tie 🤝`;
        break;
      case 1:
        screen.textContent = `Computer Wins 😭`;
        ComputerScore++;
        scoreBoardCom.textContent = `Computer's Score 🤖: ${ComputerScore}`;
        break;
      case 2:
        screen.textContent = `You win 🙌`;
        score++;
        scoreBoard.textContent = `Your score 🧔: ${score}`;
    }
  } else if (value === "Paper") {
    switch (randomElement) {
      case 0:
        screen.textContent = `You win 🙌`;
        score++;
        scoreBoard.textContent = `Your score 🧔: ${score}`;
        break;
      case 1:
        screen.textContent = `It's a Tie 🤝`;
        break;
      case 2:
        screen.textContent = `Computer Wins 😭`;
        ComputerScore++;
        scoreBoardCom.textContent = `Computer's Score 🤖: ${ComputerScore}`;
    }
  } else if (value === "Scissors") {
    switch (randomElement) {
      case 0:
        screen.textContent = `Computer Wins 😭`;
        ComputerScore++;
        scoreBoardCom.textContent = `Computer's Score 🤖: ${ComputerScore}`;
        break;
      case 1:
        screen.textContent = `You win 🙌`;
        score++;
        scoreBoard.textContent = `Your score 🧔: ${score}`;
        break;
      case 2:
        screen.textContent = `It's a Tie 🤝`;
    }
  }
  addedValue.textContent = `You chose ${value} : Computer Chose ${MysteryBox[randomElement]}`;
}

document.addEventListener("keydown", (event) => {
  if (event.key.startsWith("r")) {
    chooseCharacter("Rock");
  } else if (event.key.startsWith("R")) {
    chooseCharacter("Rock");
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key.startsWith("p")) {
    chooseCharacter("Paper");
  } else if (event.key.startsWith("P")) {
    chooseCharacter("Paper");
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key.startsWith("S")) {
    chooseCharacter("Scissors");
  } else if (event.key.startsWith("s")) {
    chooseCharacter("Scissors");
  }
});
