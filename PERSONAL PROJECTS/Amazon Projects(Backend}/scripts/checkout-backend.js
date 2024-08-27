import { renderOrderSummary } from "./checkout/orderSummary-backend.js";
import { renderPaymentSummary } from "./checkout/paymentSummary-backend.js";
import { loadProducts,loadCart} from "../data/products-backend.js";




new Promise ((resolve)=>{

loadProducts(()=>{
  resolve(
    
  )
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















// loadProducts(() => {
//   // console.log('Products loaded:', products);
//   renderOrderSummary();
//   renderPaymentSummary();});


// In your orderSummary-backend.js


