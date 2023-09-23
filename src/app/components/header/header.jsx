import React from 'react';
import classes from './header.module.css';
import Burger from './burger/burger';
import Navbar from './navbar/navbar';
import HeaderCartBlock from './headerCartBlock/headerCartBlock';
import SiteLink from '../common/siteLink/siteLink';
import CartIcon from '../common/cartIcon/cartIcon';
import { NavLink } from 'react-router-dom';
import HeaderCartIconLink from './headerCartIconLink/headerCartIconLink';

const Header = () => {
    return (
        <header className={classes.header}>
            <SiteLink className={classes.siteLink} />
            <HeaderCartBlock />
            <div className={classes.rightMobileBlock}>
                <HeaderCartIconLink />
                <Burger />
            </div>
            <Navbar />
        </header>
    );
};

export default Header;
