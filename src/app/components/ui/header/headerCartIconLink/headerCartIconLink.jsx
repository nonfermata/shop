import React from 'react';
import classes from '../header.module.css';
import CartIcon from '../../../common/cartIcon/cartIcon';
import { NavLink } from 'react-router-dom';
import scrollToTop from '../../../../utils/scrollToTop';
import { useSelector } from 'react-redux';
import { getCart } from '../../../../../redux/cartReducer';

const HeaderCartIconLink = () => {
    const quantity = useSelector(getCart()).reduce(
        (acc, item) => acc + item.donations.length,
        0
    );
    return (
        <NavLink
            to='cart'
            title='Перейти в корзину'
            onClick={scrollToTop}
            className={(link) =>
                link.isActive ? classes.cartIconActive : classes.cartIcon
            }
        >
            <CartIcon />
            {quantity !== 0 && (
                <div className={classes.quantityWrap}>{quantity}</div>
            )}
        </NavLink>
    );
};

export default HeaderCartIconLink;
