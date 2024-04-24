// Adjust the quantity of each item through "+" and "-" buttons.
const quantityAdjustButtons = document.querySelectorAll('.fa-plus-circle, .fa-minus-circle');
quantityAdjustButtons.forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.card-body');
    const quantitySpan = item.querySelector('.quantity');
    const currentValue = parseInt(quantitySpan.textContent, 10);
    const price = parseFloat(item.querySelector('.unit-price').textContent, 10);

    if (button.classList.contains('fa-plus-circle')) {
      quantitySpan.textContent = currentValue + 1;
    } else {
      quantitySpan.textContent = Math.max(0, currentValue - 1);
    }

    updateTotalPrice(item, price);
  });
});

// Delete items from Cart
const deleteButtons = document.querySelectorAll('.fas fa-trash-alt');
deleteButtons.forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.card-body');
    item.remove();
    updateTotalPrice();
  });
});

//Like items from cart
const likeButtons = document.querySelectorAll('.fas fa-heart');
likeButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('liked');
  });
});

//See the total price adjusted according to quantity and deletions
function updateTotalPrice(item, price = 0) {
    const totalPriceSpan = document.querySelector('.total');
    const items = document.querySelectorAll('.card-body');
    let totalPrice = 0;
  
    items.forEach(currentItem => {
      const quantitySpan = currentItem.querySelector('.quantity');
      const quantity = parseInt(quantitySpan.textContent, 10);
  
      if (currentItem === item) {
        totalPrice += price * quantity;
      } else {
        const currentPrice = parseFloat(currentItem.querySelector('.unit-price').textContent, 10);
        totalPrice += currentPrice * quantity;
      }
    });
  
    totalPriceSpan.textContent = `$${totalPrice.toFixed(2)}`;
  }