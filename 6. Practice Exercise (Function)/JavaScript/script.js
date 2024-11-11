// Solution 1
// function checkOddEven(number) {

//   if(number % 2 === 0) {
//     console.log(`${number} is Even.`);
//   } else {
//     console.log(`${number} is odd.`);
//   }
// }

// checkOddEven(prompt('Enter Number to find Odd/Even: '));




// Solution 2
// function findLargestNumber(number1, number2) {
//   number1 = prompt('Enter 1st number: ');
//   number2 = prompt('Enter 2nd number: ');

//   // if (number1 > number2) {
//   //   console.log(`${number1} is greater than ${number2}`);
//   // } else {
//   //   console.log(`${number2} is greater than ${number1}`);
//   // }

//   return number1 > number2 ? `${number1} is greater than ${number2}` : `${number2} is greater than ${number1}`
// }

// console.log(findLargestNumber());




// Solution 3
function checkTemperature(celsiusValue) {
  return 9/5 * celsiusValue + 32;
}

console.log(checkTemperature(prompt('Enter Degree to find Fahrenheit: ')));