// export {cart}


export let cart;
loadFromStorage();


export function loadFromStorage(){
  cart = JSON.parse(localStorage.getItem('cart')); 
if (!cart){
  cart =[
    {
      productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity:2,
      deliveryOptionId:'3'
    },
    {
      productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity:2,
      deliveryOptionId:'3'
    }
  
];
};

}

export function addtoCart (productId) {

    
      let matchingItem;
      cart.forEach((cartItem) =>{
        if (productId === cartItem.productId){
          matchingItem = cartItem;
        }
      });
      // const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
      // // console.log(quantitySelector);
      // const quantity = Number(quantitySelector.value)

      if (matchingItem){
        matchingItem.quantity += 1;
        // matchingItem.quantity += quantity
      }else{
        cart.push({
          productId:productId,
          quantity: 1,
          deliveryOptionId:'1'
           });          
      }

          
    // const addedMessage = document.querySelector(
    //   `.js-added-to-cart-${productId}`
    // );
    // console.log(productId);
    // addedMessage.classList.add('added-to-cart-visible');

    // setTimeout(() => {
    //   addedMessage.classList.remove('added-to-cart-visible');
    // }, 2000);

   
 
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
  

  export function saveToStorage () {
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


  export function updateDeliveryOption(productId, deliveryOptionId){
    let matchingItem;
    cart.forEach(cartItem =>{
      if(productId === cartItem.productId){
        matchingItem = cartItem
      }
    });

    matchingItem.deliveryOptionId = deliveryOptionId;
    saveToStorage();
  };

