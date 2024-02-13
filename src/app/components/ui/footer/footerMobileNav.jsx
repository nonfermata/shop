import React from 'react';
import classes from './footer.module.css';
import {
    getAllPopsStatus,
    togglePopStatus
} from '../../../../redux/isPopVisibleReducer';
import ArrowForMenu from '../../common/arrowForMenu/arrowForMenu';
import { useDispatch, useSelector } from 'react-redux';

const FooterMobileNav = () => {
    const dispatch = useDispatch();
    const burgerMenuStatus = useSelector(getAllPopsStatus()).burger;
    return (
        <div className={classes.footerMobileNav}>
            <div
                className={classes.otherItems}
                onClick={() => {
                    dispatch(togglePopStatus('burger'));
                }}
            >
                Все альбомы и книги группы
                <ArrowForMenu isActive={burgerMenuStatus} />
            </div>
        </div>
    );
};

export default FooterMobileNav;
