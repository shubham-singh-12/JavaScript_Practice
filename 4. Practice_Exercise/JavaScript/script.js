// Solution 1
const my_Name = 'xyz';


// Solution 2
document.querySelector('#my-name').innerHTML = `My Name is ${my_Name}.`;


// Solution 3
const GST = 18;

let cartValue = Math.round(((15599 - (10 / 100 * 15599)) - 272 + (2499 - (41 / 100 * 2499)) - 29 + 25 + 20) * (100 + GST) / 100);


// Solution 4
console.log(cartValue);


// Solution 6
let firstNumber = '5';
let secondNumber = '5';

let result = eval(firstNumber) + eval(secondNumber);
console.log(result);