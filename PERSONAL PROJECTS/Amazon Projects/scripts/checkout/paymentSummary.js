import { cart, saveToStorage,  } from "../../data/cart.js";
import { getProducts } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import { formatCurrency } from "../Utils/money.js";
import { saveOrder, orderList } from "../order/order.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';


export function renderPaymentSummary() {
  

  let productPriceCents = 0;
  let shippingPriceCents = 0;

  cart.forEach(cartItem => {
    const productId = cartItem.productId;
    const product = getProducts(productId);
    productPriceCents += product.priceCents * cartItem.quantity;

    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    shippingPriceCents += deliveryOption.priceCents;
  });

  const totalBeforeTax = productPriceCents + shippingPriceCents;
  const taxCents = totalBeforeTax * 0.1;
  const totalCents = taxCents + totalBeforeTax;

  let cartQuantity = 0;
  cart.forEach(cartItem => {
    cartQuantity += cartItem.quantity;
  });

  const paymentSummaryHTML = `
    <div class="payment-summary-title">Order Summary</div> 
    <div class="payment-summary-row">
        <div class='js-items-count'>Items (${cartQuantity}):</div>
        <div class="payment-summary-money">₵${formatCurrency(productPriceCents)}</div>
    </div>
    <div class="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div class="payment-summary-money">₵${formatCurrency(shippingPriceCents)}</div>
    </div>
    <div class="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div class="payment-summary-money">₵${formatCurrency(totalBeforeTax)}</div>
    </div>
    <div class="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div class="payment-summary-money">₵${formatCurrency(taxCents)}</div>
    </div>
    <div class="payment-summary-row total-row">
        <div>Order total:</div>
        <div class="payment-summary-money">₵${formatCurrency(totalCents)}</div>
    </div>
    <button class="place-order-button button-primary js-place-order">
        Place your order
    </button>
  `;

  document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;

  const formattedDate = dayjs().format('MMMM D, YYYY h:mm A');
  document.querySelector('.js-place-order').addEventListener('click', () => {
    cart.forEach(cartItem=>{
      const deliveryOptionId = cartItem.deliveryOptionId;
      const cartItemDeliveryOption =  getDeliveryOption(deliveryOptionId)
    })





    const order ={
        OrderId: Date.now(),
        products: [...cart],
        OrderPrice: totalCents,
        orderTime: formattedDate
    }
    orderList.unshift(order); 
    saveOrder();
    cart.length = 0;
    saveToStorage()
    alert('Order placed successfully!');
    window.location.href = 'orders.html';
  });
}
