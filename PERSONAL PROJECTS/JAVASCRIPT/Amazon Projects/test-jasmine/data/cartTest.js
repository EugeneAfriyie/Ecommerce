import {addtoCart,loadFromStorage,cart} from '../../data/cart.js';



describe("Test suite:addtoCart",()=>{
    
    it('add exiting product to the cart',()=>{
        spyOn(localStorage,'getItem').and.callFake(()=>{
        
            return JSON.stringify([]);
        })
        loadFromStorage();
        addtoCart('83d4ca15-0f35-48f5-b7a3-1ea210004f2e');
        console.log((cart))
        expect(cart.length).toEqual(1)
    })


   

    it('add exiting product to the cart',()=>{
        addtoCart('83d4ca15-0f35-48f5-b7a3-1ea210004f2e');
        expect(matchingItem.quantity).toEqual(2)
        
    })

    
})