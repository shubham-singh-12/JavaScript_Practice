let computerChoice;

function generateComputerChoice() {
  let randomNumber = Math.random() * 3;

  if (randomNumber > 0 && randomNumber <= 1) {
    computerChoice = 'Bat';
  } else if (randomNumber > 1 && randomNumber <= 2) {
    computerChoice = 'Ball';
  } else {
    computerChoice = 'wicket';
  }
};


function bat() {

  generateComputerChoice();

  let resultMsg;
  if (computerChoice === 'Bat') {
    resultMsg = 'Match Draw.';
  } else if (computerChoice === 'Ball') {
    resultMsg = 'User win.';
  } else {
    resultMsg = 'Computer win.';
  }

  alert(`You have Chosen Bat. Computer choice is ${computerChoice} and ${resultMsg}`);
};




function ball() {

  generateComputerChoice();

  let resultMsg;
  if (computerChoice === 'Bat') {
    resultMsg = 'Computer Wins.';
  } else if (computerChoice === 'Ball') {
    resultMsg = 'Match Drawn.';
  } else {
    resultMsg = 'User Wins.';
  }

  alert(`You have Chosen Ball. Computer choice is ${computerChoice} and ${resultMsg}`);
};




function wicket() {

  generateComputerChoice();

  let resultMsg;
  if (computerChoice === 'Bat') {
    resultMsg = 'User Wins.';
  } else if (computerChoice === 'Ball') {
    resultMsg = 'Computer win.';
  } else {
    resultMsg = 'Match Drawn.';
  }

  alert(`You have Chosen Wicket. Computer choice is ${computerChoice} and ${resultMsg}`);
};