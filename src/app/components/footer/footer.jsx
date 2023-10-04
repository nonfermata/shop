import React from 'react';
import classes from './footer.module.css';
import Navbar from '../header/navbar/navbar';
import ArrowForMenu from '../common/arrowForMenu/arrowForMenu';
import { useDispatch, useSelector } from 'react-redux';
import {
    getAllPopsStatus,
    togglePopStatus
} from '../../../redux/isPopVisibleReducer';
import { useLocation } from 'react-router-dom';
import ForeignUsers from '../payment/foreignUsers/foreignUsers';
import AboutPayment from './aboutPayment';

const Footer = () => {
    const pageName = useLocation().pathname;
    const dispatch = useDispatch();
    const burgerMenuStatus = useSelector(getAllPopsStatus()).burger;

    return (
        <footer className={classes.footerWrap}>
            {pageName === '/confirmation' && <AboutPayment />}
            <ForeignUsers />
            {pageName !== '/payment' && pageName !== '/confirmation' && (
                <>
                    <div className={classes.footerDesktop}>
                        <Navbar />
                    </div>
                    <div className={classes.footerMobile}>
                        <div
                            className={classes.otherItems}
                            onClick={() => {
                                dispatch(togglePopStatus('burger'));
                            }}
                        >
                            Другие альбомы и книги группы
                            <ArrowForMenu isActive={burgerMenuStatus} />
                        </div>
                    </div>
                </>
            )}
        </footer>
    );
};

export default Footer;
