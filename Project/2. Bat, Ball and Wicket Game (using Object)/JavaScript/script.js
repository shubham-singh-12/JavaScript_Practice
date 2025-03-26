// Function that generate Computer Choice.
function generateComputerChoice() {
  // Generate Random Choice using Random Number
  let randomNumber = Math.random() * 3;

  // Finding Computer Choice
  if (randomNumber > 0 && randomNumber <= 1) {
    return 'Bat';
  } else if (randomNumber > 1 && randomNumber <= 2) {
    return 'Ball';
  } else {
    return 'Wicket';
  }
}




// Function for Bat Button.
function bat() {

  // Use Computer Choice Generate Function.
  let computerChoice = generateComputerChoice();

  // Define for Result
  let resultMsg = getResult('Bat', computerChoice);

  // Function to show Result message in Alert
  showResult('Bat', computerChoice, resultMsg);
}




// Function for Ball Button.
function ball() {

  // Use Computer Choice Generate Function.
  let computerChoice = generateComputerChoice();

  // Define for Result
  let resultMsg = getResult('Ball', computerChoice);

  // Function to show Result message in Alert
  showResult('Ball', computerChoice, resultMsg);
}




// Function for Wicket Button.
function wicket() {

  // Use Computer Choice Generate Function.
  let computerChoice = generateComputerChoice();

  // Define for Result
  let resultMsg = getResult('Wicket', computerChoice);

  // Function to show Result message in Alert
  showResult('Wicket', computerChoice, resultMsg);
}




// Store and Display result of User, Computer wins & Tie Match
let score = {
  win: 0,
  lost: 0,
  tie: 0,

  displayScore: function () {
    return `Win: ${score.win}, Lost: ${score.lost}, Tie: ${score.tie}.`;
  }
}




// Function that get result and show
function getResult(userMove, computerMove) {

  // Check User choice as Bat and random computer moves.
  if (userMove === 'Bat') {
    if (computerMove === 'Ball') {

      // Update Score 
      score.win += 1;
      return 'User Won';
    } else if (computerMove === 'Bat') {

      // Update Score 
      score.tie += 1;
      return 'It is a Tie';
    } else if (computerMove === 'Wicket') {

      // Update Score 
      score.lost += 1;
      return 'Computer Won';
    }

    // Check User choice as Ball and random computer moves.
  } else if (userMove === 'Ball') {
    if (computerMove === 'Ball') {

      // Update Score 
      score.tie += 1;
      return 'It is a Tie';
    } else if (computerMove === 'Bat') {

      // Update Score 
      score.lost += 1;
      return 'Computer Won';
    } else if (computerMove === 'Wicket') {

      // Update Score 
      score.win += 1;
      return 'User Won';
    }

    // Check User choice as Wicket and random computer moves.
  } else {
    if (computerMove === 'Ball') {

      // Update Score 
      score.lost += 1;
      return 'Computer Won';
    } else if (computerMove === 'Bat') {

      // Update Score 
      score.win += 1;
      return 'User Won';
    } else if (computerMove === 'Wicket') {

      // Update Score 
      score.tie += 1;
      return 'It is a Tie';
    }
  }
}




// Function to show Result
function showResult(userMove, computerMove, result) {

  // Show Message in Alert
  alert(`You have chosen ${userMove} & Computer choice is ${computerMove}. \n\n So ${result}.\n\n ${score.displayScore()}`);
  
}