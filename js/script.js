//Adjust the quantity of each item through "+" and "-" buttons.
function updateTotalPrice(item, price) {
  const quantity = parseInt(item.querySelector('.quantity').textContent, 10);
  const totalPriceElement = document.querySelector('.total-price');
  let totalPrice = 0;

  // Calculate the total price for all items
  document.querySelectorAll('.card-body').forEach(item => {
    const quantity = parseInt(item.querySelector('.quantity').textContent, 10);
    const price = parseFloat(item.querySelector('.unit-price').textContent, 10);
    totalPrice += quantity * price;
  });

  totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
}

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

// //Delete items from Cart
// const deleteButtons = document.querySelectorAll('.remove-item');
// deleteButtons.forEach(i => {
//   button.addEventListener('click', () => {
//     const item = button.closest('.card-body');
//     item.remove();
//     updateTotalPrice();
//   });
// });

var removeCartItemButtons = document.getElementsByClassName('remove-item')
console.log(removeCartItemButtons)
for(var i = 0; i < removeCartItemButtons.length; i++) {
  var button = removeCartItemButtons[i]
  button.addEventListener('click', function(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.parentElement.parentElement.remove()
  })
}


// //Like items from cart
// const likeButtons = document.querySelectorAll('.like-button');
// likeButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     button.classList.toggle('liked');
//   });
// });

// //See the total price adjusted according to quantity and deletions
// function updateTotalPrice(item, price = 0) {
//     const totalPriceSpan = document.querySelector('.total');
//     const items = document.querySelectorAll('.card-body');
//     let totalPrice = 0;
  
//     items.forEach(currentItem => {
//       const quantitySpan = currentItem.querySelector('.quantity');
//       const quantity = parseInt(quantitySpan.textContent, 10);
  
//       if (currentItem === item) {
//         totalPrice += price * quantity;
//       } else {
//         const currentPrice = parseFloat(currentItem.querySelector('.unit-price').textContent, 10);
//         totalPrice += currentPrice * quantity;
//       }
//     });
  
//     totalPriceSpan.textContent = `$${totalPrice.toFixed(2)}`;
//   }