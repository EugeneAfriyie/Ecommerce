import {
    cart,
    removeFromCart,
      updateQuantity,updateDeliveryOption,saveToStorage
  } from '../../data/cart-backend.js';
  import {products,getProducts} from '../../data/products-backend.js';
  // import { updatecartQuantity } from './amazon.js'
  import {formatCurrency }from '../Utils/money.js'
  
  import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
  import { deliveryOptions,getDeliveryOption } from '../../data/deliveryOptions-backend.js';
  import { renderPaymentSummary } from './paymentSummary-backend.js';
  
  
  
  export function renderOrderSummary() {
    let cartSummaryHTML = '';
    cart.forEach((cartItem) => {
        const productId = cartItem.productId;
        const matchingProduct = getProducts(productId);

        if (!matchingProduct) {
            console.error(`Product not found for ID: ${productId}`);
            return; // Skip this iteration if the product is not found
        }

        // Assuming rest of the code remains the same...
        const deliveryOptionId = cartItem.deliveryOptionId;
        const deliveryOption = getDeliveryOption(deliveryOptionId);
        const today = dayjs();
        const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
        const dateString = deliveryDate.format('dddd, MMMM D');

        cartSummaryHTML += `
            <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
                <div class="delivery-date">
                    Delivery date: ${dateString}
                </div>
                <!-- Rest of the HTML -->
            </div>
        `;
    });

    document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;

    // Attach event listeners as before...
}
  
      renderOrderSummary();
      // console.log(cart)