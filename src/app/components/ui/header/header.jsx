import React from 'react';
import classes from './header.module.css';
import Burger from './burger/burger';
import Navbar from './navbar/navbar';
import SiteLink from '../../common/siteLink/siteLink';
import HeaderCartIconLink from './headerCartIconLink/headerCartIconLink';
import VeryTopNotice from './veryTopBlock/veryTopNotice';
// import SupportLink from './supportLink/supportLink';
import CapitalInvisible from './veryTopBlock/capital/capitalInvisible';
// import Capital from './veryTopBlock/capital/capital';

const Header = () => {
    return (
        <header className={classes.header}>
            <VeryTopNotice />
            <CapitalInvisible />
            {/*<Capital />*/}
            <SiteLink className={classes.siteLink} />
            {/*<div className={classes.supportLinkWrap}>*/}
            {/*    <SupportLink />*/}
            {/*</div>*/}
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
