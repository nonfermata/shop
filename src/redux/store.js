import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartReducer';
import isMenuVisibleReducer from "./isMenuVisibleReducer";
const reducer = combineReducers({
    cart: cartReducer,
    mobileMenu: isMenuVisibleReducer
});

const store = configureStore({ reducer });

export default store;
