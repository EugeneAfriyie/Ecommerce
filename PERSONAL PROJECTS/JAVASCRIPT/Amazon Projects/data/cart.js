export {cart}


let cart = JSON.parse(localStorage.getItem('cart')); 
if (!cart){
  cart =[
  
];
};
console.log(cart);

export function addtoCart (button) {
    const productId = button.dataset.productId;
      let matchingItem;
      cart.forEach((cartItem) =>{
        if (productId === cartItem.productId){
          matchingItem = cartItem;
        }
      });

      if (matchingItem){
        matchingItem.quantity++
      }else{
        cart.push({
          productId:productId,
          quantity:1
           });          
      }

   

      saveToStorage();
  };


  export function removeFromCart(productId){
    const newCart =[];

    cart.forEach((cartItem) => {
      if (cartItem.productId !== productId){
        newCart.push(cartItem)
      }
    });
      cart = newCart;
    saveToStorage();
  };

  function saveToStorage () {
    localStorage.setItem('cart',JSON.stringify(cart));
  };

  export function updatecartQuantity(){
    let cartQuantity = 0;
    cart.forEach((cartItem) =>{
      cartQuantity += cartItem.quantity
    });
    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;

    return cartQuantity;
  }



  export function updateQuantity(productId, newQuantity) {
    let matchingItem;
  
    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });
  
    matchingItem.quantity = newQuantity;
  
    saveToStorage();
  }