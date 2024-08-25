import { renderOrderSummary } from "./checkout/orderSummary-backend.js";
import { renderPaymentSummary } from "./checkout/paymentSummary-backend.js";
import { loadProducts } from "../data/products-backend.js";

// Define the eugene function
const eugene = () => {
  renderOrderSummary(); // Render order summary using the products array
  renderPaymentSummary(); // Render payment summary using the products array
};

// Load products and then call eugene
loadProducts(() => {
  console.log('Callback executed. Products:', products);
  eugene(); // Invoke eugene after products are loaded
});
