export {cart}


let cart = JSON.parse(localStorage.getItem('cart')); 
if (!cart){
  cart =[
  
];
};

export function addtoCart (button) {
    const productId = button.dataset.productId;
      let matchingItem;
      cart.forEach((cartItem) =>{
        if (productId === cartItem.productId){
          matchingItem = cartItem;
        }
      });
      const quantitySelector = document.querySelector(
        `.js-quantity-selector-${productId}`
      );
      const quantity = Number(quantitySelector.value)

      if (matchingItem){
        matchingItem.quantity+= quantity
      }else{
        cart.push({
          productId:productId,
          quantity: quantity
           });          
      }

          
    const addedMessage = document.querySelector(
      `.js-added-to-cart-${productId}`
    );
    console.log(productId);
    addedMessage.classList.add('added-to-cart-visible');

    setTimeout(() => {
      addedMessage.classList.remove('added-to-cart-visible');
    }, 2000);

   
 
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

