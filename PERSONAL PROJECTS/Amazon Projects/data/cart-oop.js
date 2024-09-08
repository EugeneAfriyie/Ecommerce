

function Cart(localStorageKey){
    const cart ={
        cartItems :undefined,
       loadFromStorage(){
            this.cartItems = JSON.parse(localStorage.getItem(localStorageKey)); 
          if (!this.cartItems){
            this.cartItems =[
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
          
          },
        addtoCart (productId) {
    
        
            let matchingItem;
            this.cartItems.forEach((cartItem) =>{
              if (productId === cartItem.productId){
                matchingItem = cartItem;
              }
            });

      
            if (matchingItem){
              matchingItem.quantity += 1;
            }else{
              this.cartItems.push({
                productId:productId,
                quantity: 1,
                deliveryOptionId:'1'
                 });          
            }
      
                
     
         
       
            cart.saveToStorage();
        },
        
        removeFromCart(productId){
        const newCart =[];
    
        this.cartItems.forEach((cartItem) => {
          if (cartItem.productId !== productId){
            newCart.push(cartItem)
          }
        });
          cart = newCart;
        this.saveToStorage()();
      },
    
        saveToStorage () {
        localStorage.setItem(localStorageKey,JSON.stringify(this.cartItems));
      },
    
       updatecartQuantity(){
        let cartQuantity = 0;
        this.cartItems.forEach((cartItem) =>{
          cartQuantity += cartItem.quantity
        });
        document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
    
    
    
        return cartQuantity;
      },
      updateQuantity(productId, newQuantity) {
        let matchingItem;
      
        this.cartItems.forEach((cartItem) => {
          if (productId === cartItem.productId) {
            matchingItem = cartItem;
          }
        });
      
        matchingItem.quantity = newQuantity;
      
        this.saveToStorage()();
      },
    
     updateDeliveryOption(productId, deliveryOptionId){
        let matchingItem;
        this.cartItems.forEach(cartItem =>{
          if(productId === cartItem.productId){
            matchingItem = cartItem
          }
        });
    
        matchingItem.deliveryOptionId = deliveryOptionId;
        this.saveToStorage();
      }
      
    
    
        
    }

    return cart;
}

const cart = Cart('cart-opp');
const businessCart = Cart('cart-business');
cart.loadFromStorage();


businessCart.loadFromStorage();
