import { getProducts } from "./products-backend.js";
import { loadProductsFetch } from "./products-backend.js";









export const ordersList = JSON.parse(localStorage.getItem('orders')) || [];



console.log(ordersList)

export function addOrder(orders){
    ordersList.push(orders);

    saveToStorage()
}


function saveToStorage(){
    localStorage.setItem('orders' , JSON.stringify(ordersList))
}



 async function renderOrderList (){


await loadProductsFetch();



    await new Promise((resolve, reject) => {
        
    })

    ordersList.forEach(order => {


        let ordersListHTML= '';
        let orderProductHTml = '';

     await function name(params) {
        order.products.forEach(((orderProduct)=>{
            const productId = orderProduct.productId;
            const matchingProduct= getProducts(productId)
            console.log(matchingProduct.image)

          


            orderProductHTml +=`
            
            
            <div class="product-image-container">
              <img src="${matchingProduct.image}">
            </div>

            <div class="product-details">
              <div class="product-name">
                ${matchingProduct.name}
              </div>
              <div class="product-delivery-date">
                Arriving on: ${orderProduct.estimatedDeliveryTime
}
              </div>
              <div class="product-quantity">
                Quantity: ${orderProduct.quantity}
              </div>
              <button class="buy-again-button button-primary">
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
             
            
            
            `














           










        }))
       }

        

        console.log(orderProductHTml)
        
    });

}

renderOrderList()