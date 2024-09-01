import { loadProducts, products } from "../data/products-backend.js";
import { renderOrderSummary } from "./checkout/orderSummary-backend.js";
import { renderPaymentSummary } from "./checkout/paymentSummary-backend.js";
 "../data/products-backend.js";




async function loadPage() {
try{
  // throw 'Tgis will throw an error automatically'

  await Promise.all([
    // loadProductsFetch(),
  new Promise((resolve, reject) => {
    loadProducts(()=>{
    // console.log(products)

    resolve();
      
    });
  }) ,
  
  // new Promise((resolve, reject) => {
  //   loadCart(()=>{

  //     // reject('error ')
  //     resolve();
  //   });
   
  // }),
 ])

} catch(error){
    console.log( 'Unexpected error ,Please try again later')
}

  renderOrderSummary();
  renderPaymentSummary();
  
}



loadPage();









//  loadProductsFetch().then(()=>{
//   renderOrderSummary();
//   renderPaymentSummary();


//  })



/*
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

 */













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


