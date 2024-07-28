import { cart } from "../../data/cart.js";
import { getProducts,products} from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";

import formatCurrency from "../Utils/money.js";
import { renderOrderSummary } from "./ordersummary.js";





export function renderPaymentSummary (){
  let productPriceCents = 0;
  let ShippingPriceCents = 0;

  cart.forEach(cartitem => {
    const productId = cartitem.productId;
    const  product = getProducts(productId );
    productPriceCents += product.priceCents * cartitem.quantity;


    const deliveryOption = getDeliveryOption(cartitem.deliveryOptionId);

    ShippingPriceCents += deliveryOption.priceCents;

  });
  const totalBeforeTax = productPriceCents + ShippingPriceCents;


  const TaxCents = totalBeforeTax * 0.1;
  const totalCents = TaxCents + totalBeforeTax;




  const paymentSummaryHTML = `
  

        <div class="payment-summary-title">
                    Order Summary
                </div> 

                <div class="payment-summary-row">
                    <div>Items (3):</div>
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

                <button class="place-order-button button-primary">
                    Place your order
                </button>
        
        `;

        document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;

  

  
}

renderOrderSummary();