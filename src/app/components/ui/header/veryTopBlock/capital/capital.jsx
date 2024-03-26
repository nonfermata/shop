import React from 'react';
import classes from './capital.module.css';
import { Link } from 'react-router-dom';
import formatSum from '../../../../../utils/formatSum';
import scrollToTop from '../../../../../utils/scrollToTop';
import { capital } from '../../../../../data/supporters';

const Capital = () => {
    return (
        <>
            <Link
                to='items/polya'
                title='Подробней про новую книгу'
                className={classes.capital}
                onClick={scrollToTop}
            >
                Собрано
                <div className={classes.capitalSumBox}>
                    <span className='fw500'>{formatSum(capital)}</span> ₽
                </div>
            </Link>
        </>
    );
};

export default Capital;
