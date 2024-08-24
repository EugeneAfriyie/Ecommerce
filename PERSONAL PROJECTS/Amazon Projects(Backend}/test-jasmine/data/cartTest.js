import {addtoCart,loadFromStorage,cart} from '../../data/cart.js';



describe("Test suite:addtoCart",()=>{
    
    it('add new product to the cart',()=>{
        spyOn(localStorage,'setItem').and.callFake(()=>{
            
            // return JSON.stringify([]);
        })
        spyOn(localStorage,'getItem').and.callFake(()=>{
        
            return JSON.stringify([]);
        })
        loadFromStorage();
        addtoCart('83d4ca15-0f35-48f5-b7a3-1ea210004f2e');
        console.log((cart))
        expect(cart.length).toEqual(1)
        expect(localStorage.setItem).toHaveBeenCalledTimes(0);
        expect(cart[0].productId).toEqual('83d4ca15-0f35-48f5-b7a3-1ea210004f2e');
        addtoCart('83d4ca15-0f35-48f5-b7a3-1ea210004f2e');
        addtoCart('83d4ca15-0f35-48f5-b7a3-1ea210004f2e');
        expect(cart[0].quantity).toEqual(3);
        console.log(cart)
    })


   

    it('add exiting product to the cart',()=>{
        spyOn(localStorage,'setItem').and.callFake(()=>{
            
            // return JSON.stringify([]);
        })
        spyOn(localStorage,'getItem').and.callFake(()=>{
        
            return JSON.stringify([

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

            ]);
        })
        loadFromStorage();
        expect(cart.length).toEqual(2)
        expect(localStorage.setItem).toHaveBeenCalledTimes(0);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        addtoCart('83d4ca15-0f35-48f5-b7a3-1ea210004f2e');
        expect(localStorage.setItem).toHaveBeenCalledTimes(0);

        addtoCart("54e0eccd-8f36-462b-b68a-8182611d9add");
        expect(localStorage.setItem).toHaveBeenCalledTimes(0);

        // expect(cart[0].quantity).toEqual(3);
        
    })

    

    
})