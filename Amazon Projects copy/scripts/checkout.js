import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { cart } from "../data/cart.js";
// import '../data/cart-class.js';


// renderOrderSummary();
// renderPaymentSummary();
//       console.log(cart)


const none = document.querySelectorAll('.none')
const checkeoutDiv = document.querySelector('.checkout-grid')
const cartEmptyDiv = document.querySelector('.js-cart-empty')
if (cart.length > 0 ){
    cartEmptyDiv.style.display= 'none';
    renderOrderSummary();
    renderPaymentSummary();
}else{
    checkeoutDiv.style.display = 'none';
    document.querySelector('.checkout-grid').classList.add('checkout-grid-empty')
}




