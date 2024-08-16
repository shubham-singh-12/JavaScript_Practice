// Solution 1
let myName = "Shubham Singh";


// Solution 2
document.querySelector('#my-name').innerText = `My name is ${myName}.`;


// Solution 3
let cartValue = Math.round(((15599 - (10 / 100 * 15599)) - 272 + (2499 - (41 / 100 * 2499)) - 29 + 25 + 20) * 118 / 100);


// Solution 4
console.log(cartValue);


// Solution 5
const GSTpercentage = 18;
let cartValue2 = Math.round(((15599 - (10 / 100 * 15599)) - 272 + (2499 - (41 / 100 * 2499)) - 29 + 25 + 20) * (100 + GSTpercentage) / 100);
console.log(cartValue2);


// Solution 6
let fisrtNumber = '5';
let secondNumber = '10';
let result = (eval(fisrtNumber) + eval(secondNumber));
console.log(result);