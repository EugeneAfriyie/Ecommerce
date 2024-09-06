import { getProducts } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';



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
          <div id='preparing' class="progress-label current-status">
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

const currentshippingDate = trackitem.shippedDayString;
const deliveryDay = trackitem.dateString;


let today = dayjs();
const todayString = today.format('dddd, MMMM D');
console.log(todayString)
console.log(currentshippingDate)
console.log(deliveryDay)


const statusShipped = document.getElementById('shipped')
const statusdelivered = document.getElementById('delivered')
const preparingStatus = document.getElementById('preparing')
const progressBar =  document.querySelector('.progress-bar')
const progressLabel =  document.querySelector('.progress-label')

if(todayString === currentshippingDate){
    progressLabel.classList.toggle('current-status')
    progressBar.style.width = '50%';
    statusShipped.classList.toggle('current-status');
}else if(trackitem.dateString === todayString){
    progressLabel.classList.toggle('current-status')
    statusdelivered.classList.toggle('current-status')
    progressBar.style.width = '100%';
}
else {
    progressBar.style.width = '10%';
    // progressLabel.classList.toggle('current-status')
}


