function generateComputerChoice() {
  let randomNumber = Math.random() * 3;

  if (randomNumber > 0 && randomNumber <= 1) {
    return 'Bat';
  } else if (randomNumber > 1 && randomNumber <= 2) {
    return 'Ball';
  } else {
    return 'Wicket';
  }
};




function getResult(userMove, computerMove) {
  if (userMove === 'Ball') {
    if (computerMove === 'Bat') {
      return 'Computer Wins.';
    } else if (computerMove === 'Ball') {
      return 'Match Drawn.';
    } else {
      return 'User Wins.';
    }

  } else if (userMove === 'Bat') {
    if (computerMove === 'Bat') {
      return 'Match Draw.';
    } else if (computerMove === 'Ball') {
      return 'User win.';
    } else {
      return 'Computer win.';
    }

  } else {
    if (computerMove === 'Bat') {
      return 'User Wins.';
    } else if (computerMove === 'Ball') {
      return 'Computer win.';
    } else {
      return 'Match Drawn.';
    }
  }
}




function showResult (userMove, computerMove, result) {
  alert(`You have Chosen ${userMove}. Computer choice is ${computerMove} and ${result}`);
}




function bat() {

  let computerChoice = generateComputerChoice();

  let resultMsg = getResult('Bat', computerChoice);

  showResult('Bat', computerChoice, resultMsg);
};




function ball() {

  let computerChoice = generateComputerChoice();

  let resultMsg = getResult('Ball', computerChoice);

  showResult('Ball', computerChoice, resultMsg);
};




function wicket() {

  let computerChoice = generateComputerChoice();

  let resultMsg = getResult('Wicket', computerChoice);

  showResult('Wicket', computerChoice, resultMsg);
};