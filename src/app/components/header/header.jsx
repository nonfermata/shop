import React from 'react';
import classes from './header.module.css';
import Burger from './burger/burger';
import Navbar from './navbar/navbar';
import HeaderCartBlock from './headerCartBlock/headerCartBlock';
import SiteLink from '../common/siteLink/siteLink';
import HeaderCartIconLink from './headerCartIconLink/headerCartIconLink';
import TopNotice from './topNotice/topNotice';

const Header = () => {
    return (
        <header className={classes.header}>
            <TopNotice />
            <SiteLink className={classes.siteLink} />
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
