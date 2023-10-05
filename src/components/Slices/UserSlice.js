import { createSlice } from "@reduxjs/toolkit";
import {toast} from "react-toastify"

export const userSlice = createSlice({

  name: 'users',

  initialState: { user: [] },

  reducers: {

    addUser(state, action) {

      const { email, password, name,id,cartitem } = action.payload;

      const existingUser = state.user.find(user => user.email === email);

      if (!existingUser) {

        state.user.push({ email, password,id, name, cartitem }); // Include an empty cartitem array
       

      } else {

        alert('User with the same email already exists');

      }

    },

    adder(state, action) {

        const { login, cart } = action.payload;
      
        const userIndex = state.user.findIndex((e)=>e.id===login.id)
     
        if (userIndex !== -1) {

          const user = state.user[userIndex];
    
            const productIndex = user.cartitem.findIndex(
    
              (product) => product.id === cart.id
    
            );
    
            if (productIndex !== -1) {
    
              user.cartitem[productIndex].quantity += cart.quantity;
    
            } else {
    
              // Product doesn't exist in the user's cart, add it
    
              user.cartitem.push(cart);
    
              toast.success(`${cart.title} is  added successfully`, {
    
                position: "top-left",
    
              });
    
            }
    
          }
    
          return state;
     
     
    
      },
      
      remover(state, action) {

        const { login, cartItemId } = action.payload;
  
     
  
        const updatedUser = state.user.map(user => {
  
          if (user.id === login.id) {
  
            const updatedCartItems = user.cartitem.filter(product => product.id !== cartItemId);
  
     
  
            if (updatedCartItems.length !== user.cartitem.length) {
  
              // If an item was removed, show the toast
  
              toast.info(`Cart item removed successfully`, {
  
                position: "bottom-center",
  
              });
  
            }
  
     
  
            return { ...user, cartitem: updatedCartItems };
  
          }
  
          return user;
  
        });
        return { ...state, user: updatedUser };

      },
      
  
     
  
      decreaseCart(state, action) {
        console.log(action.payload)
        const { login, cartItemId } = action.payload;
  
        const userIndex = state.user.findIndex((user) => user.id === login.id);
        if (userIndex !== -1) {
          const user = state.user[userIndex];
          const productIndex = user.cartitem.findIndex(
            (product) => product.id === cartItemId
          );
  
          if (productIndex !== -1) {
            const product = user.cartitem[productIndex];

            if (product.quantity > 1) {
              product.quantity -= 1;
            } else {
              user.cartitem.splice(productIndex, 1);
            }
            toast.info(`Cart item updated successfully`, {
              position: "bottom-center",
            });
          }
  
        }

     

  },
}

});

 

export const { addUser,adder,remover,decreaseCart} = userSlice.actions;

export default userSlice.reducer;