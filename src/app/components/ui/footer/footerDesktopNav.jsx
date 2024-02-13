import React from 'react';
import classes from './footer.module.css';
import Navbar from '../header/navbar/navbar';

const FooterDesktopNav = () => {
    return (
        <div className={classes.footerDesktopNav}>
            <Navbar />
        </div>
    );
};

export default FooterDesktopNav;
