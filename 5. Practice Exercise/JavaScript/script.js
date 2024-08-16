let age = prompt('Enter your age: ');
let gender = prompt('Enter your Gender: ').toLowerCase;
let finalDiscount;


if (age <= 5) {
  finalDiscount = 100;
} else if (gender === 'female') {
  finalDiscount = 50;
} else if (age <= 8) {
  finalDiscount = 50;
} else if (age >= 65) {
  finalDiscount = 30;
} else {
  finalDiscount = 0;
}

alert(`Your final discount is ${finalDiscount}`);


 