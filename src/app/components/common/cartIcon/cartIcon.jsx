import React from 'react';
import { useSelector } from 'react-redux';
import { getCart } from '../../../../redux/cartReducer';
import cart from '../../../assets/svg/cart';

const CartIcon = () => {
    const cartIcon =
        useSelector(getCart()).length === 0 ? cart.empty : cart.filled;
    return <>{cartIcon}</>;
};

export default CartIcon;
