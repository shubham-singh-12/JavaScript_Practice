let currentDisplay = '';

document.querySelector('#display').value = currentDisplay;

function clean() {
  currentDisplay = '';
  document.querySelector('#display').value = currentDisplay;
}


function one() {
  currentDisplay += '1';
  document.querySelector('#display').value = currentDisplay;
}


function two() {
  currentDisplay += '2';
  document.querySelector('#display').value = currentDisplay;
}


function three() {
  currentDisplay += '3';
  document.querySelector('#display').value = currentDisplay;
}


function four() {
  currentDisplay += '4';
  document.querySelector('#display').value = currentDisplay;
}


function five() {
  currentDisplay += '5';
  document.querySelector('#display').value = currentDisplay;
}


function six() {
  currentDisplay += '6';
  document.querySelector('#display').value = currentDisplay;
}


function seven() {
  currentDisplay += '7';
  document.querySelector('#display').value = currentDisplay;
}


function eight() {
  currentDisplay += '8';
  document.querySelector('#display').value = currentDisplay;
}


function nine() {
  currentDisplay += '9';
  document.querySelector('#display').value = currentDisplay;
}


function zero() {
  currentDisplay += '0';
  document.querySelector('#display').value = currentDisplay;
}


function plus() {
  currentDisplay += '+';
  document.querySelector('#display').value = currentDisplay;
}


function minus() {
  currentDisplay += '-';
  document.querySelector('#display').value = currentDisplay;
}


function multiply() {
  currentDisplay += '*';
  document.querySelector('#display').value = currentDisplay;
}


function divide() {
  currentDisplay += '/';
  document.querySelector('#display').value = currentDisplay;
}


function equal() {
  currentDisplay = eval(currentDisplay);
  document.querySelector('#display').value = currentDisplay;
}


function dot() {
  currentDisplay += '.';
  document.querySelector('#display').value = currentDisplay;
}