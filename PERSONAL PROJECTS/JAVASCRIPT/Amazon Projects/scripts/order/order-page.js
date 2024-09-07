import { orderList,saveOrder } from "./order.js";
import { getProducts } from "../../data/products.js";
import { formatCurrency } from "../Utils/money.js";
import { cart,updatecartQuantity,saveToStorage } from "../../data/cart.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';



 function renderOrderList() {
    let ordersListHTML = '';


    orderList.forEach(order => {
        let orderProductHTml = '';

        order.products.forEach((orderProduct,i) => {
            const productId = orderProduct.productId;
            const matchingProduct = getProducts(productId);

            const deliveryOptionId = orderProduct.deliveryOptionId;
  
          const deliveryOption = getDeliveryOption(deliveryOptionId)
          
          const today = dayjs();
          const deliveryDate = today.add(deliveryOption.deliveryDays,'days');
          const shippedDay = today.add(deliveryOption.shippedDay,'days');
          const dateString = deliveryDate.format('dddd, MMMM D');
          const shippedDayString = shippedDay.format('dddd, MMMM D');
          orderProduct.dateString = dateString;
          orderProduct.shippedDayString = shippedDayString;
        

  

            orderProductHTml += `
             <div class="order-details-grid">
                <div class="product-image-container">
                  <img src="${matchingProduct.image}">
                </div>
                <div class="product-details">
                  <div class="product-name">
                    ${matchingProduct.name}
                  </div>
                  <div class="product-delivery-date">
                    Arriving on: ${dateString}
                  </div>
                  <div class="product-quantity">
                    Quantity: ${orderProduct.quantity}
                  </div>
                  <button class="buy-again-button button-primary js-buy-again-button" data-id="${matchingProduct.id}" 
                  data-orderId="${order.OrderId}">
                    <img class="buy-again-icon" src="images/icons/buy-again.png">
                    <span class="buy-again-message">Buy it again</span>
                  </button>
                </div>
                <div class="product-actions">
                  <a >
                    <button class="track-package-button js-track-package-button button-secondary" data-id="${matchingProduct.id}" 
                  data-orderId="${order.OrderId}">
                      Track package
                    </button>
                  </a>
                </div>
            </div>
            `;
        });

        ordersListHTML += `
            <div class="order-container">
                <div class="order-header">
                    <div class="order-header-left-section">
                        <div class="order-date">
                            <div class="order-header-label">Order Placed:</div>
                            <div>${order.orderTime}</div>
                        </div>
                        <div class="order-total">
                            <div class="order-header-label">Total:</div>
                            <div>₵${formatCurrency(order.OrderPrice)}</div>
                        </div>
                    </div>
                    <div class="order-idheader-right-section">
                        <div class="order-header-label">Order ID:</div>
                        <div>${order.OrderId}</div>
                    </div>
                </div>
                ${orderProductHTml}
            </div>
        `;



    // console.log(order.products)
    
  });


    saveOrder()
    document.querySelector('.js-order-grid').innerHTML = ordersListHTML;


    

    
    const buyAgainbBtn = document.querySelectorAll('.js-buy-again-button');
    const trackBtn = document.querySelectorAll('.js-track-package-button');
    buyAgainbBtn.forEach(buyBtn =>{
    const productId = buyBtn.dataset.id;
    const orderId = Number(buyBtn.dataset.orderid);
    buyBtn.addEventListener('click',()=>{

        let matchingItem;
        let matchingOrder;
    orderList.forEach(order =>{
        
          if (order.OrderId === orderId){
            matchingOrder = order;
            console.log(matchingOrder)
        }

       
    })
    
        let matchingOrderElement ;
        matchingOrder.products.forEach(order=>{
            if(order.productId === productId){
                matchingOrderElement = order;
            }

        })


        
        cart.forEach((cartItem) =>{
          if (productId === cartItem.productId){
            matchingItem = cartItem;

          }
        
        });
        if (matchingItem){
            matchingItem.quantity += matchingOrderElement.quantity;

          }else{
            cart.push({
              productId:productId,
              quantity: matchingOrderElement.quantity,
              deliveryOptionId:'1'
               });          
          }
          




          updatecartQuantity()
          saveToStorage()
        

          


 
 
})
 })



 trackBtn.forEach(buyBtn =>{
  const productId = buyBtn.dataset.id;
  const orderId = Number(buyBtn.dataset.orderid);
  buyBtn.addEventListener('click',()=>{

      let matchingOrder;
  orderList.forEach(order =>{
      
        if (order.OrderId === orderId){
          matchingOrder = order;
          console.log(matchingOrder)
      }

     
  })
  
      let matchingOrderElement ;
      matchingOrder.products.forEach(order=>{
          if(order.productId === productId){
              matchingOrderElement = order;
          }

      })


 
        




     
        localStorage.setItem('trackItem',JSON.stringify(matchingOrderElement))

        window.location.href = 'tracking.html';
       

        console.log(matchingOrderElement)




})
})


 
}

const none = document.querySelectorAll('.none')
const checkOutDiv = document.querySelector('.js-order-grid')
const carEmptyDiv = document.querySelector('.js-order-empty')


if (orderList.length > 0 ){
  carEmptyDiv.style.display= 'none';
  renderOrderList()
  updatecartQuantity()

  
}else{
  checkOutDiv.style.display = 'none';
}







