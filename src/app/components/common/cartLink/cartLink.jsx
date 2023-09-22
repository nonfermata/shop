import React from 'react';
import { NavLink } from 'react-router-dom';
import CartIcon from '../cartIcon/cartIcon';

const CartLink = ({ className }) => {
    return (
        <NavLink to='cart' title='Перейти в корзину' className={className}>
            <CartIcon />
            Корзина
        </NavLink>
    );
};

export default CartLink;
