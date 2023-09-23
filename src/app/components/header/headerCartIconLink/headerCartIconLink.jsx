import React from 'react';
import classes from "../header.module.css";
import CartIcon from "../../common/cartIcon/cartIcon";
import {NavLink} from "react-router-dom";

const HeaderCartIconLink = () => {
    return (
        <NavLink
            to='cart'
            title='Перейти в корзину'
            className={(link) =>
                link.isActive
                    ? classes.cartIconActive
                    : classes.cartIcon
            }
        >
            <CartIcon />
        </NavLink>
    );
};

export default HeaderCartIconLink;