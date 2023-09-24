import React from 'react';
import classes from './footer.module.css';
import Navbar from '../header/navbar/navbar';
import ArrowForMenu from '../common/arrowForMenu/arrowForMenu';
import menu from '../../data/menu';
import SubMenu from '../common/subMenu/subMenu';
import { useDispatch, useSelector } from 'react-redux';
import {
    getAllMenusStatus,
    toggleMenuStatus
} from '../../../redux/isMenuVisibleReducer';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const dispatch = useDispatch();
    const allMenusStatus = useSelector(getAllMenusStatus());
    const alboms = [menu[1], menu[3], menu[4], menu[5]];
    const books = [{ ...menu[2] }, { ...menu[6] }];
    books[0].name = 'Бумажные книги';
    books[1].name = 'Электронные книги';

    return (
        <footer className={classes.footerWrap}>
            <div className={classes.footerDesktop}>
                <Navbar />
            </div>
            <div className={classes.footerMobile}>
                <NavLink to='items/new_book' className={classes.footerNewBookLink}>
                    <div className={classes.footerSubMenuWrap}>
                        <p className={classes.footerSubMenuTitle}>Новая книга</p>
                        <ArrowForMenu />
                    </div>
                </NavLink>
                <div
                    className={classes.footerSubMenuWrap}
                    onClick={() => {
                        dispatch(toggleMenuStatus('alboms'));
                    }}
                >
                    <p className={classes.footerSubMenuTitle}>Альбомы</p>
                    <ArrowForMenu isActive={allMenusStatus.alboms} />
                    <SubMenu menu={alboms} isActive={allMenusStatus.alboms} />
                </div>
                <div
                    className={classes.footerSubMenuWrap}
                    onClick={() => {
                        dispatch(toggleMenuStatus('books'));
                    }}
                >
                    <p className={classes.footerSubMenuTitle}>Книги</p>
                    <ArrowForMenu isActive={allMenusStatus.books} />
                    <SubMenu menu={books} isActive={allMenusStatus.books} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
