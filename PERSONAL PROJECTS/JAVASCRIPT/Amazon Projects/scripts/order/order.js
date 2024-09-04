

export const orderList = JSON.parse(localStorage.getItem('order')) || [];


export function saveOrder(){
    localStorage.setItem('order',JSON.stringify(orderList))
}
console.log(orderList)
