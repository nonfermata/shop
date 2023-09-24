import React from 'react';
import classes from './arrowForMenu.module.css';
import arrow from '../../../assets/svg/arrow';

const ArrowForMenu = ({ isActive }) => {
    const addedStyle = isActive ? classes.arrowWrapRotated : '';
    return (
        <div className={classes.arrowWrap + ' ' + addedStyle}>
            <div className={classes.arrow}>{arrow}</div>
        </div>
    );
};

export default ArrowForMenu;
