import React from 'react';
import { NavLink } from 'react-router-dom';
import CartIcon from '../cartIcon/cartIcon';
import scrollToTop from '../../../utils/scrollToTop';

const CartLink = ({ className }) => {
    return (
        <NavLink
            to='cart'
            title='Перейти в корзину'
            className={className}
            onClick={scrollToTop}
        >
            <CartIcon />
            Корзина
        </NavLink>
    );
};

export default CartLink;
