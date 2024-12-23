import { formatCurrency } from "../scripts/Utils/money.js";
import { getProducts } from "./products-backend.js";
import { loadProductsFetch } from "./products-backend.js";





alert('fsdgh')


export const ordersList = JSON.parse(localStorage.getItem('orders')) || [];
console.log(ordersList)



console.log(ordersList)

export function addOrder(orders){
    ordersList.push(orders);

    saveToStorage()
}


function saveToStorage(){
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
}


    renderOrderList()