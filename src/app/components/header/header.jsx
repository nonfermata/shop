import React from 'react';
import classes from './header.module.css';
import Burger from './burger/burger';
import Navbar from './navbar/navbar';
import HeaderCartBlock from './headerCartBlock/headerCartBlock';
import SiteLink from '../common/siteLink/siteLink';
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
            <div className={classes.navbarWrap}>
                <Navbar />
            </div>
        </header>
    );
};

export default Header;
