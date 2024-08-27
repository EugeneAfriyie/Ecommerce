import { renderOrderSummary } from "./checkout/orderSummary-backend.js";
import { renderPaymentSummary } from "./checkout/paymentSummary-backend.js";
import { loadProducts } from "../data/products-backend.js";















loadProducts(() => {
  // console.log('Products loaded:', products);
  renderOrderSummary();
  renderPaymentSummary();});


// In your orderSummary-backend.js


