import {
    cart,
    removeFromCart,
      updateQuantity,updateDeliveryOption,saveToStorage
  } from '../../data/cart.js';
  import {products,getProducts} from '../../data/products.js';
  // import { updatecartQuantity } from './amazon.js'
  import {formatCurrency }from '../Utils/money.js'
  
  import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
  import { deliveryOptions,getDeliveryOption } from '../../data/deliveryOptions.js';
  import { renderPaymentSummary } from './paymentSummary.js';
  
  
  
  export function renderOrderSummary(){
      let cartSummaryHTML = '';
      cart.forEach((cartItem) => {
        const productId = cartItem.productId;
  
        const matchingProduct = getProducts(productId);
  
  
          const deliveryOptionId = cartItem.deliveryOptionId;
  
          const deliveryOption = getDeliveryOption(deliveryOptionId)
          
          const today = dayjs();
          const deliveryDate = today.add(deliveryOption.deliveryDays,'days');
          const dateString = deliveryDate.format('dddd, MMMM D');
  
  
          cartSummaryHTML += `
               <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
                  <div class="delivery-date">
                    Delivery date:${dateString}
                  </div>
  
                  <div class="cart-item-details-grid">
                    <img class="product-image"
                      src="${matchingProduct.image}">
  
                    <div class="cart-item-details">
                      <div class="product-name">
                        ${matchingProduct.name}
                      </div>
                      <div class="product-price">
                      ${matchingProduct.getPriceCents() }
                      </div>
                      <div class="product-quantity">
                        <span>
                          Quantity: <span class="quantity-label js-quantity-label-${matchingProduct.id}">${cartItem.quantity}</span>
                        </span>
                        <span class="update-quantity-link link-primary js-update-link" data-product-id="${matchingProduct.id}">
                          Update
                        </span>
  
                            <input class="quantity-input js-quantity-input-${matchingProduct.id}">
                          <span class="save-quantity-link link-primary js-save-link"
                            data-product-id="${matchingProduct.id}">
                            Save
                          </span>
                
                        <span class="delete-quantity-link link-primary js-delect-link" data-product-Id="${matchingProduct.id}">
                          Delete
                        </span>
                      
                      </div>
                    </div>
  
                    <div class="delivery-options">
                      <div class="delivery-options-title">
                        Choose a delivery option:
                      </div>
                      
                          ${deliveryOptionsHTML(matchingProduct,cartItem)}
                    </div>
                  </div>
              </div> `;
                
  
              });
  
  
  
      function deliveryOptionsHTML (matchingProduct,cartItem){
  
        let html = '';
        deliveryOptions.forEach(deliveryOption =>{
  
          const today = dayjs();
          const deliveryDate = today.add(deliveryOption.deliveryDays,'days');
          const dateString = deliveryDate.format('dddd, MMMM D');
          const priceString = deliveryOption.priceCents === 0 ? 'FREE ' :  `₵${formatCurrency(deliveryOption.priceCents)} -`;
  
  
          const isChecked = deliveryOption.id === cartItem.deliveryOptionId ;
  
          html += ` <div class="delivery-option js-delivery-option" data-product-id="${matchingProduct.id}" data-delivery-option-id="${deliveryOption.id}">
                        <input type="radio"
                          class="delivery-option-input"
                          name="delivery-option-${matchingProduct.id}" ${isChecked ? "checked" : " "} >
                        <div>
                          <div class="delivery-option-date">
                          ${dateString}
                          </div>
                          <div class="delivery-option-price">
                          ${priceString} Shipping
                        </div>
                        </div>
                      </div>  `;
        });
  
            return html;
          };
  
  
  
  
  
  
  
  
      document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;
  
      document.querySelectorAll('.js-delect-link').forEach((link) =>{
        link.addEventListener('click',() =>{
          const productId = link.dataset.productId;
          location.reload();
  
          removeFromCart(productId);
          const container = document.querySelector(`.js-cart-item-container-${productId}`).remove();
          updatecartQuantity();
          renderPaymentSummary();
        });
      });
  
      function updatecartQuantity(){
        let cartQuantity = 0;
      cart.forEach((cartItem) =>{
        cartQuantity += cartItem.quantity
      });
      document.querySelector('.js-return-to-home').innerHTML =`${ cartQuantity} items`;
      };
      updatecartQuantity();
  
  
        document.querySelectorAll('.js-update-link')
        .forEach((link) => {
        link.addEventListener('click', () => {
            const productId = link.dataset.productId;
  
            cart.forEach((cartItem) =>{
              if(cartItem.productId === productId){
                const container = document.querySelector(
                  `.js-cart-item-container-${productId}`
                );
  
                container.classList.add('is-editing-quantity');
  
                    document.querySelectorAll('.js-save-link')
            .forEach((link) => {
              link.addEventListener('click', () => {
              const productId = link.dataset.productId;
  
              const container = document.querySelector(
              `.js-cart-item-container-${productId}`
              );
              container.classList.remove('is-editing-quantity');
  
              
              const quantityInput = document.querySelector(
                `.js-quantity-input-${productId}`
              );
              const newQuantity = Number(quantityInput.value);
              updateQuantity(productId, newQuantity);
  
              const quantityLabel = document.querySelector(
                `.js-quantity-label-${productId}`
              );
              quantityLabel.innerHTML = newQuantity;
  
              updatecartQuantity();
              renderOrderSummary();
              // renderPaymentSummary();

              });
            });
  
          
        
        }
        });
  
        });
        }); 
  
  
        document.querySelectorAll('.js-delivery-option').forEach(option =>{
          option.addEventListener('click',() =>{
  
            // const productId = option.dataset.productId;
            // const deliveryOptionId = option.dataset.deliveryOptionId;
            const {productId, deliveryOptionId} = option.dataset;
            let matchingItem;
            cart.forEach(cartItem =>{
              if(productId === cartItem.productId){
                matchingItem = cartItem
              }
            });
        
            matchingItem.deliveryOptionId = deliveryOptionId;
            saveToStorage();
            renderOrderSummary();
          });
        });


        renderPaymentSummary();
      }

      console.log(cart)
  
      // renderOrderSummary();
      // console.log(cart)