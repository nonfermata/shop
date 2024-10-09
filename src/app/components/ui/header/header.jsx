import React from 'react';
import classes from './header.module.css';
import Burger from './burger/burger';
import Navbar from './navbar/navbar';
import SiteLink from '../../common/siteLink/siteLink';
import HeaderCartIconLink from './headerCartIconLink/headerCartIconLink';
import VeryTopInfo from './veryTopBlock/veryTopInfo';
import CartLink from '../../common/cartLink/cartLink';
import Capital from './veryTopBlock/capital/capital';
// import CapitalInvisible from './veryTopBlock/capital/capitalInvisible';
// import SupportLink from './supportLink/supportLink';

const Header = () => {
    return (
        <header className={classes.header}>
            <SiteLink className={classes.siteLink} />
            <VeryTopInfo />
            {/*<CapitalInvisible />*/}
            <Capital />
            <div className={classes.cartLinkWrap}>
                <CartLink
                    className={(link) =>
                        link.isActive
                            ? classes.cartLinkActive
                            : classes.cartLink
                    }
                />
            </div>
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
