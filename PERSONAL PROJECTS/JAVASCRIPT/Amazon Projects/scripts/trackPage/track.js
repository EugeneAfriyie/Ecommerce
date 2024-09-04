import { getProducts } from "../../data/products.js";
import { getDeliveryOption,shipDate } from "../../data/deliveryOptions.js";


const trackitem = JSON.parse(localStorage.getItem('trackItem'));
const matchingItem = getProducts(trackitem.productId)
console.log(trackitem)





const trackPageHTML= `


     <div class="order-tracking">
        <a class="back-to-orders-link link-primary" href="orders.html">
          View all orders
        </a>

        <div class="delivery-date">
          Arriving on ${trackitem.dateString}
        </div>

        <div class="product-info">
          ${matchingItem.name}
        </div>

        <div class="product-info">
          Quantity: ${trackitem.quantity}
        </div>

        <img class="product-image" src="${matchingItem.image}">

        <div class="progress-labels-container">
          <div id='preparing' class="progress-label">
            Preparing
          </div>
          <div id='shipped' class="progress-label ">
            Shipped
          </div>
          <div id='delivered' class="progress-label">
            Delivered
          </div>
        </div>

        <div class="progress-bar-container">
          <div class="progress-bar"></div>
        </div>
      </div>
`
document.querySelector('.js-order-tracking').innerHTML = trackPageHTML;




const deliveryOption = getDeliveryOption(trackitem.deliveryOptionId);

const shipDayStatus = Math.floor(deliveryOption.deliveryDays / 2);
const currentshippingDate = shipDate(trackitem.dateString, shipDayStatus);


let today = new Date();


if(trackitem.deliveryOptionId === '1'){
    document.querySelector('.progress-bar').style.width = '10%';
    document.getElementById('preparing').classList.add('current-status')
}else if(trackitem.deliveryOptionId === '2'){
    document.querySelector('.progress-bar').style.width = '50%';
    document.getElementById('shipped').classList.add('current-status')
}
else {
    document.querySelector('.progress-bar').style.width = '100%';
    document.getElementById('delivered').classList.add('current-status')
}


