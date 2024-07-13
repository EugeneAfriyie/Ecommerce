


// 14f Solution #30
{/* <span>
Quantity: <span class="quantity-label">${cartItem.quantity}</span>
</span>
<span class="update-quantity-link link-primary">
<span class="update-quantity-link link-primary js-update-link"
data-product-id="${matchingProduct.id}">
Update
</span>
<span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
@@ -124,3 +125,11 @@ function updateCartQuantity() {
}

updateCartQuantity();

document.querySelectorAll('.js-update-link')
.forEach((link) => {
link.addEventListener('click', () => {
const productId = link.dataset.productId;
console.log(productId);
});
}); */}


// 14g Solution #31
// data-product-id="${matchingProduct.id}">
// Update
// </span>
// <input class="quantity-input">
// <span class="save-quantity-link link-primary">Save</span>
// <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
// Delete
// </span>

// margin-top: 11px;
//   margin-bottom: 15px;
// }

// .quantity-input {
//   width: 30px;
// }




// 14i Solution #33
// .is-editing-quantity .save-quantity-link {
//     display: initial;
//   }
  
//   .is-editing-quantity .quantity-label {
//     display: none;
//   }
  
//   .is-editing-quantity .update-quantity-link {
//     display: none;
//   }



// 14j Solution #34
// Update
// </span>
// <input class="quantity-input">
// <span class="save-quantity-link link-primary">Save</span>
// <span class="save-quantity-link link-primary js-save-link"
//   data-product-id="${matchingProduct.id}">
//   Save
// </span>
// <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
//   Delete
// </span>
// @@ -139,3 +142,15 @@ document.querySelectorAll('.js-update-link')
// container.classList.add('is-editing-quantity');
// });
// });

// document.querySelectorAll('.js-save-link')
// .forEach((link) => {
// link.addEventListener('click', () => {
// const productId = link.dataset.productId;

// const container = document.querySelector(
// `.js-cart-item-container-${productId}`
// );
// container.classList.remove('is-editing-quantity');
// });
// });


// 14k Solution #35
// Update
// </span>
// <input class="quantity-input">
// <input class="quantity-input js-quantity-input-${matchingProduct.id}">  <span class="save-quantity-link link-primary js-save-link"
//               data-product-id="${matchingProduct.id}">
//               Save
// @@ -152,5 +152,10 @@ document.querySelectorAll('.js-save-link')
//         `.js-cart-item-container-${productId}`
//       );
//       container.classList.remove('is-editing-quantity');

//       const quantityInput = document.querySelector(
//         `.js-quantity-input-${productId}`
//       );
//       const newQuantity = Number(quantityInput.value);
//     });
//   });




// 14l Solution #36
// 2-copy-of-code/lesson-14/data/cart.js
// Viewed
// Original file line number	Diff line number	Diff line change
// @@ -57,4 +57,18 @@ export function calculateCartQuantity() {
//   });

//   return cartQuantity;
// }

// export function updateQuantity(productId, newQuantity) {
//   let matchingItem;

//   cart.forEach((cartItem) => {
//     if (productId === cartItem.productId) {
//       matchingItem = cartItem;
//     }
//   });

//   matchingItem.quantity = newQuantity;

//   saveToStorage();

   
// 2-copy-of-code/lesson-14/scripts/checkout.js
// Viewed
// Original file line number	Diff line number	Diff line change
// @@ -1,7 +1,12 @@
// // Optional: notice we can write imports on multiple
// // lines so the line doesn't get too long.
// import {cart, removeFromCart,
//   calculateCartQuantity} from '../data/cart.js';
// // Optional: when importing a lot of values, you
// // can put each value on a separate line to make
// // the code easier to read.
// import {
//   cart,
//   removeFromCart,
//   calculateCartQuantity,
//   updateQuantity
// } from '../data/cart.js';
// import {products} from '../data/products.js';
// import {formatCurrency} from './utils/money.js';

// @@ -157,5 +162,6 @@ document.querySelectorAll('.js-save-link')
//         `.js-quantity-input-${productId}`
//       );
//       const newQuantity = Number(quantityInput.value);
//       updateQuantity(productId, newQuantity);
//     });
//   });




// 




// 14n Solution #38
 
// 2-copy-of-code/lesson-14/scripts/checkout.js
// Viewed
// Original file line number	Diff line number	Diff line change
// @@ -153,17 +153,27 @@ document.querySelectorAll('.js-save-link')
//     link.addEventListener('click', () => {
//       const productId = link.dataset.productId;

//       const container = document.querySelector(
//         `.js-cart-item-container-${productId}`
//       );
//       container.classList.remove('is-editing-quantity');

//       // Here's an example of a feature we can add: validation.
//       // Note: we need to move the quantity-related code up
//       // because if the new quantity is not valid, we should
//       // return early and NOT run the rest of the code. This
//       // technique is called an "early return".
//       const quantityInput = document.querySelector(
//         `.js-quantity-input-${productId}`
//       );
//       const newQuantity = Number(quantityInput.value);

//       if (newQuantity < 0 || newQuantity >= 1000) {
//         alert('Quantity must be at least 0 and less than 1000');
//         return;
//       }
//       updateQuantity(productId, newQuantity);

//       const container = document.querySelector(
//         `.js-cart-item-container-${productId}`
//       );
//       container.classList.remove('is-editing-quantity');

//       const quantityLabel = document.querySelector(
//         `.js-quantity-label-${productId}`
//       );
