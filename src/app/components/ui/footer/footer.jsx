import React from 'react';
import classes from './footer.module.css';
import { useLocation } from 'react-router-dom';
import ForeignUsers from '../../layouts/payment/foreignUsers/foreignUsers';
import FooterDesktopNav from './footerDesktopNav';
import FooterMobileNav from './footerMobileNav';
import Depeloper from './depeloper';
// import AboutPayment from './aboutPayment';

const Footer = () => {
    const pageName = useLocation().pathname;

    return (
        <footer className={classes.footerWrap}>
            {/*{pageName === '/confirmation' && <AboutPayment />}*/}
            <ForeignUsers />
            {pageName !== '/payment' && pageName !== '/confirmation' && (
                <>
                    <FooterDesktopNav />
                    <FooterMobileNav />
                </>
            )}
            <Depeloper />
        </footer>
    );
};

export default Footer;
