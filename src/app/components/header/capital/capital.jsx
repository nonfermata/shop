import React from 'react';
import classes from './capital.module.css';
import { NavLink } from 'react-router-dom';
import formatSum from '../../../utils/formatSum';
import scrollToTop from '../../../utils/scrollToTop';
import _capital from '../../../utils/_capital';

const Capital = () => {
    const capital = formatSum(_capital);
    return (
        <div className={classes.capitalWrap}>
            <NavLink
                to='items/new_book'
                title='Узнать о книге подробней'
                className={classes.capital}
                onClick={scrollToTop}
            >
                Собрано
                <div className={classes.capitalSumBox}>
                    <span className='fw500'>{capital}</span> ₽
                </div>
            </NavLink>
        </div>
    );
};

export default Capital;
