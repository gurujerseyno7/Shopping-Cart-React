
import {createSlice} from '@reduxjs/toolkit'
import {toast} from "react-toastify"




   
  
const CartSlice = createSlice( {
     name:'cartItems',
     initialState:{
        cartitem:[],
        status:'idle',
        error:null
     },
     reducers:{                 
        add(state,action){     //add action to add product from cart
            state.cartitem.push(action.payload)
        },
        remove(state,action){ //remove action to remove product from cart
            state.cartitem =state.cartitem.filter(item=>item.id!== action.payload) 
           
        },
        increaseQty(state,action){
          const itemId= action.payload;
          const  newCartItems= state.cartitem.map((item)=>{
            if(item.id=== itemId){
                if(item.quantity === undefined){
                    return{
                           ...item,
                           quantity:1,
                    };
                }else{
                    return{
                        ...item,
                        quantity:item.quantity+1,
                    };
                }
            }else{
                return item;
            }
                
            
          })
          console.log(newCartItems);
          state.cartitem=newCartItems
        },

       decreaseQty(state,action){
        const itemId= action.payload;
          const  newCartItems= state.cartitem.map((item)=>{
            if(item.id=== itemId && item.quantity>1){
                return{
                    ...item,
                    quantity:item.quantity-1,
                };
            }
            return item;
       });
       state.cartitem= newCartItems;
    }
        

     }
});
 




 
 
 
 
 
 
 
 
 
 
 
export default CartSlice.reducer;
export const{add,remove,decreaseQty,increaseQty}= CartSlice.actions



