

export const orderList = JSON.parse(localStorage.getItem('order')) || [];


export function saveOrder(){
    localStorage.setItem('order',JSON.stringify(orderList))
}
console.log(orderList)




export function getmatchingOrderElement(button){
    let matchingOrder;
    let matchingOrderElement;
    let productId;
    let orderId;


    button.forEach(buyBtn =>{
        buyBtn.addEventListener('click',()=>{
             orderId = Number(buyBtn.dataset.orderid);
             productId = buyBtn.dataset.id;
    
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
     
     
    })

     })
    
        
    
    
return [matchingOrder,productId];

}




export function updatecart(matchingItem,matchingOrderElement){
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
           
}