let cartQuantity = 0; 

document.querySelector('#cart-summary').innerText = `Your Bag has ${cartQuantity} items.`;

function addToBag() {
 cartQuantity += 1;
 document.querySelector('#cart-summary').innerText = `Your Bag has ${cartQuantity} items.`;
};

function wishlist() {
  cartQuantity -= 1;
  document.querySelector('#cart-summary').innerText = `Your Bag has ${cartQuantity} items.`;
};

function saleItem() {
  cartQuantity += 2;
  document.querySelector('#cart-summary').innerText = `Your Bag has ${cartQuantity} items.`;
};