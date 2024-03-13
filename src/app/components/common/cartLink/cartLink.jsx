import React from 'react';
import { NavLink } from 'react-router-dom';
import CartIcon from '../cartIcon/cartIcon';
import scrollToTop from '../../../utils/scrollToTop';
import { useSelector } from 'react-redux';
import { getCart } from '../../../../redux/cartReducer';
import classes from './cartLink.module.css';

const CartLink = ({ className }) => {
    const quantity = useSelector(getCart()).reduce(
        (acc, item) => acc + item.donations.length,
        0
    );
    return (
        <NavLink
            to='cart'
            title='Перейти в корзину'
            className={className}
            onClick={scrollToTop}
        >
            <CartIcon />
            Корзина
            {quantity !== 0 && (
                <div className={classes.quantityWrap}>{quantity}</div>
            )}
        </NavLink>
    );
};

export default CartLink;
