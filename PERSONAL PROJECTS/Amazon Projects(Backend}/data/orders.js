import { getProducts } from "./products-backend.js";









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












    ordersList.forEach(order => {
        order.products.forEach(((orderProduct)=>{

            const productId = orderProduct.productId;
            console.log(productId)
            const matchingProduct= getProducts(productId)
            console.log(matchingProduct)
        }))
        
    });

}

renderOrderList()