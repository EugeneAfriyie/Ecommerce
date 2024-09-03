import { formatCurrency } from "../scripts/Utils/money.js";
import { getProducts ,loadProductsFetch} from "../data/products-backend.js";
import { updatecartQuantity,cart ,saveToStorage} from "../data/cart-backend.js";


export const ordersList = JSON.parse(localStorage.getItem('orders')) || [];
console.log(ordersList);



export function addOrder(orders){
    ordersList.push(orders);

    saveToStorageOrder()
}


function saveToStorageOrder(){
    localStorage.setItem('orders' , JSON.stringify(ordersList))
}


async function renderOrderList() {
    await loadProductsFetch();

    let ordersListHTML = '';


    ordersList.forEach(order => {
        let orderProductHTml = '';

        order.products.forEach(orderProduct => {
            const productId = orderProduct.productId;
            const matchingProduct = getProducts(productId);

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
                    Arriving on: ${orderProduct.estimatedDeliveryTime}
                  </div>
                  <div class="product-quantity">
                    Quantity: ${orderProduct.quantity}
                  </div>
                  <button class="buy-again-button button-primary js-buy-again-button" data-id="${matchingProduct.id}" 
                  data-orderId="${order.id}">
                    <img class="buy-again-icon" src="images/icons/buy-again.png">
                    <span class="buy-again-message">Buy it again</span>
                  </button>
                </div>
                <div class="product-actions">
                  <a href="tracking.html">
                    <button class="track-package-button button-secondary">
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
                            <div>$${formatCurrency(order.totalCostCents)}</div>
                        </div>
                    </div>
                    <div class="order-header-right-section">
                        <div class="order-header-label">Order ID:</div>
                        <div>${order.id}</div>
                    </div>
                </div>
                ${orderProductHTml}
            </div>
        `;
    });


    document.querySelector('.js-order-grid').innerHTML = ordersListHTML;

    

    const buyAgainbBtn = document.querySelectorAll('.js-buy-again-button');

    buyAgainbBtn.forEach(buyBtn =>{
    const productId = buyBtn.dataset.id;
    const orderId = buyBtn.dataset.orderid;
    buyBtn.addEventListener('click',()=>{

        let matchingItem;
        let matchingOrder;
        ordersList.forEach(order =>{
         if (order.id === orderId){
            matchingOrder = order;
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
            // matchingItem.quantity +=  1;

          }else{
            cart.push({
              productId:productId,
              quantity: matchingOrderElement.quantity,
            //   quantity: 1,
              deliveryOptionId:'1'
               });          
          }
             
             

         updatecartQuantity()
         saveToStorage()


 
 
})
 })



}


    renderOrderList();
    // updatecartQuantity()






