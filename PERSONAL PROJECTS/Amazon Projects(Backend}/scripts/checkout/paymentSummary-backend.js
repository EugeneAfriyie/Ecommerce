import { cart,updatecartQuantity} from "../../data/cart-backend.js";
import { getProducts,products} from "../../data/products-backend.js";
import { getDeliveryOption } from "../../data/deliveryOptions-backend.js";

import {formatCurrency }from "../Utils/money.js";
import {renderOrderSummary } from "./orderSummary-backend.js"
import { addOrder } from "../../data/orders.js";



export function renderPaymentSummary (){
  let productPriceCents = 0;
  let ShippingPriceCents = 0;

  cart.forEach(cartitem => {
    const productId = cartitem.productId;
    const  product = getProducts(productId );
    // console.log(cartitem)
    productPriceCents += product.priceCents * cartitem.quantity;


    const deliveryOption = getDeliveryOption(cartitem.deliveryOptionId);

    ShippingPriceCents += deliveryOption.priceCents;

  });

  const totalBeforeTax = productPriceCents + ShippingPriceCents;


  const TaxCents = totalBeforeTax * 0.1;
  const totalCents = TaxCents + totalBeforeTax;

  

    let cartQuantity = 0;
    cart.forEach((cartItem) =>{
      cartQuantity += cartItem.quantity
    });

    // document.querySelector('.js-').innerHTML =` Items (cartQuantity)`;



  const paymentSummaryHTML = `
  

        <div class="payment-summary-title">
                    Order Summary
                </div> 

                <div class="payment-summary-row">
                    <div class='js-'>Items (${cartQuantity}):</div>
                    <div class="payment-summary-money">
                         ₵${formatCurrency(productPriceCents)}
                    </div>
                </div>

                <div class="payment-summary-row">
                    <div>Shipping &amp; handling:</div>
                    <div class="payment-summary-money">
                         ₵${formatCurrency(ShippingPriceCents)}
                    </div>
                </div>

                <div class="payment-summary-row subtotal-row">
                    <div>Total before tax:</div>
                    <div class="payment-summary-money">
                         ₵${formatCurrency(totalBeforeTax)}
                    </div>
                </div>

                <div class="payment-summary-row">
                    <div>Estimated tax (10%):</div>
                    <div class="payment-summary-money">
                        ₵${formatCurrency(TaxCents)}
                    </div>
                </div>

                <div class="payment-summary-row total-row">
                    <div>Order total:</div>
                    <div class="payment-summary-money">
                        ₵${formatCurrency(totalCents)}
                    </div>
                </div>

                <button class="place-order-button button-primary js-place-order">
                    Place your order
                </button>
        
        `;

        document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;

        const placeOrderBtn =document.querySelector('.js-place-order');
        placeOrderBtn.addEventListener('click', async() =>{

            try{
           const response = await fetch('https:supersimplebackend.dev/orders',{
                method:'POST',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify({
                    cart: cart
                })
            })
            console.log(response)
            const orders = await response.json();
            addOrder(orders);
        } catch(error){
            console.log('Unexpected Error,Try Again Later.  !!!')
        }


        window.location.href = 'orders.html'

            
        })
}



// renderOrderSummary();