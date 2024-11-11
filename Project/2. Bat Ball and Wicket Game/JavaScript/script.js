// Function for Bat Button.
function bat() {

  // Print User Choice
  const userChoiceMsg = "You have Chosen Bat";

  // Generate Random Choice using Random Number
  let randomNumber = Math.random() * 3;

  // Define Computer Choice
  let computerChoice;

  // Define for Result
  let resultMsg;

  // Finding Computer Choice
  if (randomNumber > 0 && randomNumber <= 1) {
    computerChoice = 'Bat';
    // console.log("Computer Choice is Bat.");

  } else if (randomNumber > 1 && randomNumber <= 2) {
    computerChoice = 'Ball';
    // console.log("Computer Choice is Ball.");

  } else {
    computerChoice = 'Wicket';
    // console.log("Computer Choice is Wicket.");

  }


  // Check User & Computer Choice and Finalize result who Wons...
  if (computerChoice === 'Ball') {
    resultMsg = 'User Won.';
  } else if (computerChoice === 'Bat') {
    resultMsg = 'It is a Tie.';
  } else if (computerChoice === 'Wicket') {
    resultMsg = 'Computer Won.';
  }

  // Define Computer Choice
  const computerChoiceMsg = (`Computer choice is ${computerChoice}`);

  // Show Message in Alert
  alert(`${userChoiceMsg} & ${computerChoiceMsg}, So ${resultMsg}`)
}





// Function for Ball Button.
function ball() {

  // Print User Choice
  const userChoiceMsg = "You have Chosen Ball";

  // Generate Random Choice using Random Number
  let randomNumber = Math.random() * 3;

  // Define Computer Choice
  let computerChoice;

  // Define for Result
  let resultMsg;

  // Finding Computer Choice
  if (randomNumber > 0 && randomNumber <= 1) {
    computerChoice = 'Bat';
    // console.log("Computer Choice is Bat.");

  } else if (randomNumber > 1 && randomNumber <= 2) {
    computerChoice = 'Ball';
    // console.log("Computer Choice is Ball.");

  } else {
    computerChoice = 'Wicket';
    // console.log("Computer Choice is Wicket.");

  }


  // Check User & Computer Choice and Finalize result who Wons...
  if (computerChoice === 'Ball') {
    resultMsg = 'It is a Tie.';
  } else if (computerChoice === 'Bat') {
    resultMsg = 'Computer Won.';
  } else if (computerChoice === 'Wicket') {
    resultMsg = 'User Won.';
  }

  // Define Computer Choice
  const computerChoiceMsg = (`Computer choice is ${computerChoice}`);

  // Show Message in Alert
  alert(`${userChoiceMsg} & ${computerChoiceMsg}, So ${resultMsg}`)
}





// Function for Wicket Button.
function wicket() {

  // Print User Choice
  const userChoiceMsg = "You have Chosen Wicket";

  // Generate Random Choice using Random Number
  let randomNumber = Math.random() * 3;

  // Define Computer Choice
  let computerChoice;

  // Define for Result
  let resultMsg;

  // Finding Computer Choice
  if (randomNumber > 0 && randomNumber <= 1) {
    computerChoice = 'Bat';
    // console.log("Computer Choice is Bat.");

  } else if (randomNumber > 1 && randomNumber <= 2) {
    computerChoice = 'Ball';
    // console.log("Computer Choice is Ball.");

  } else {
    computerChoice = 'Wicket';
    // console.log("Computer Choice is Wicket.");

  }


  // Check User & Computer Choice and Finalize result who Wons...
  if (computerChoice === 'Ball') {
    resultMsg = 'Computer Won.';
  } else if (computerChoice === 'Bat') {
    resultMsg = 'User Won.';
  } else if (computerChoice === 'Wicket') {
    resultMsg = 'It is a Tie.';
  }

  // Define Computer Choice
  const computerChoiceMsg = (`Computer choice is ${computerChoice}`);

  // Show Message in Alert
  alert(`${userChoiceMsg} & ${computerChoiceMsg}, So ${resultMsg}`)
}