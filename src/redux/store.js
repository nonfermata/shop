import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartReducer';
import isPopVisibleReducer from './isPopVisibleReducer';
const reducer = combineReducers({
    cart: cartReducer,
    popWindows: isPopVisibleReducer
});

const store = configureStore({ reducer });

export default store;
