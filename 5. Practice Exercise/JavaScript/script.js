// Take Age from the user.
let age = prompt('Enter Your Age: ');

// Take Gender from the User and capitalize its first letter.
let gender = prompt('Enter your Gender: ').toUpperCase;

// Store result
let discount;

if (gender === 'FEMALE' || age <= 8) {
  discount = 50;
} else if (age <= 5) {
  discount = 100;
} else if (age >= 65) {
  discount = 30;
} else {
  discount = 0;
}

// console.log(discount);
document.body.innerHTML = `You will get ${discount}% Discount.`;