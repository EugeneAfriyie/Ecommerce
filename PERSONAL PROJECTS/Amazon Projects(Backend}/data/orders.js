
export const ordersList = JSON.parse(localStorage.getItem('orders')) || [];



export function addOrder(orders){
    ordersList.push(orders);
    saveToStorage()
    console.log(orders)
}


function saveToStorage(){
    localStorage.setItem('orders' , JSON.stringify(ordersList))
}