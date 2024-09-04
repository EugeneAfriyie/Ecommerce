


export const orderList = []
console.log(orderList)


export function saveOrder(){
    localStorage.setItem('order',JSON.stringify(orderList))
}