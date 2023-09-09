import React from 'react';
import { useSelector } from 'react-redux';
import { getCart, getTotalPrice } from '../../utils/cartUtil';
import { getCartIds } from '../../../redux/cartReducer';

const Cart = () => {
    const cart = getCart(useSelector(getCartIds()));
    console.log(cart);
    const totalPrice = getTotalPrice(cart);
    console.log(totalPrice);
    return (
        <div>
            <h1>Cart</h1>
        </div>
    );
};

export default Cart;
