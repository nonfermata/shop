import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartReducer';
import isPopVisibleReducer from './isPopVisibleReducer';
import captchaReducer from './captchaReducer';
import userDataReducer from './userDataReducer';

const reducer = combineReducers({
    cart: cartReducer,
    popWindows: isPopVisibleReducer,
    captcha: captchaReducer,
    userData: userDataReducer
});

const store = configureStore({ reducer });

export default store;
