import { configureStore } from "@reduxjs/toolkit";
import {  persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Choose the storage engine you want to use
import { combineReducers } from "@reduxjs/toolkit";
import Cartreducer from "../components/Slices/CartSlice";
import Productreducer from "../components/Slices/ProductSlice";
import userReducer from "../components/Slices/UserSlice";
import loginReducer from '../components/Slices/LoginSlice'
import counterReducer from "../components/Slices/CounterSlice";


// Configuration for Redux Persist
const persistConfig = {
  key: "root", 
  storage,
};


// Create a persisted reducer
const reducer =  combineReducers({
    cartItems: Cartreducer,
    products: Productreducer,
    users: userReducer,
    login:loginReducer,
    counter:counterReducer,
   

});


const persistedReducer = persistReducer(persistConfig,reducer);
const store = configureStore({
  reducer:
   persistedReducer,
});





export default store 
