import { cart } from "../../data/cart.js";

export const orderList = JSON.parse(localStorage.getItem('order')) || [];


export function saveOrder(){
    localStorage.setItem('order',JSON.stringify(orderList))
}








