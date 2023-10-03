import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartReducer';
import isPopVisibleReducer from './isPopVisibleReducer';
import captchaReducer from './captchaReducer';

const reducer = combineReducers({
    cart: cartReducer,
    popWindows: isPopVisibleReducer,
    captcha: captchaReducer
});

const store = configureStore({ reducer });

export default store;
