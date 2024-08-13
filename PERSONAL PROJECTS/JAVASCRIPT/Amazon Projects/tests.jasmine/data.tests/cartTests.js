import { addtoCart,cart} from "../../data/cart";

describe('Test suite addtoCart',()=>{
    it(" Add an existing product into the cart",()=>{
        addtoCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6'); 
        expect(cart.length).toEqual('1');
    })
    
    it(" Add a new product into the cart",()=>{
        addtoCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6'); 
        expect(cart.length).toEqual('1');
    });
});

