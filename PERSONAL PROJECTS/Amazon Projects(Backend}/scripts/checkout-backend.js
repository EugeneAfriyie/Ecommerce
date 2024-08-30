import { loadCart, loadProducts } from "../data/products-backend.js";
import { renderOrderSummary } from "./checkout/orderSummary-backend.js";
import { renderPaymentSummary } from "./checkout/paymentSummary-backend.js";
 "../data/products-backend.js";



//  loadProductsFetch().then(()=>{
//   renderOrderSummary();
//   renderPaymentSummary();


//  })




 Promise.all([
    // loadProductsFetch(),
  new Promise((resolve, reject) => {
    loadProducts(()=>{
    resolve();
      
    });
  }) ,
  
  new Promise((resolve, reject) => {
    loadCart(()=>{
      resolve();
    });
   
  }),
 ]).then(()=>{
  renderOrderSummary();
  renderPaymentSummary();
 });














/*
new Promise ((resolve)=>{

loadProducts(()=>{
  resolve()
})

}).then((resolve)=>{
  return new Promise((resolve, reject) => {
    loadCart(()=>{
      resolve()
    }) 
  })
}).then(()=>{

  renderOrderSummary();
  renderPaymentSummary();
  
});

*/















// loadProducts(() => {
//   // console.log('Products loaded:', products);
//   renderOrderSummary();
//   renderPaymentSummary();});


// In your orderSummary-backend.js


