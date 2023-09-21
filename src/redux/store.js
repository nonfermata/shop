import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartReducer';
import isBurgerMenuVisibleReducer from "./isBurgerMenuVisibleReducer";
const reducer = combineReducers({
    cart: cartReducer,
    burgerMenu: isBurgerMenuVisibleReducer
});

const store = configureStore({ reducer });

export default store;
