let cartQuantity = 0;

document.querySelector('#cart-summary').innerHTML = `Your Bag has ${cartQuantity} items.`;


// Add to Bag Button
function addToBag() {
  cartQuantity += 1;
  document.querySelector('#cart-summary').innerHTML = `Your Bag has ${cartQuantity} items.`;
};


// Move to Wishlist Button
function wishlist() {
  cartQuantity -= 1;
  document.querySelector('#cart-summary').innerHTML = `Your Bag has ${cartQuantity} items.`;
};


// Add 2 item Button (Sale Btton)
function saleButton() {
  cartQuantity += 2;
  document.querySelector('#cart-summary').innerHTML = `Your Bag has ${cartQuantity} items.`;
};