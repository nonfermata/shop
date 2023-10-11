import React from 'react';
import classes from './capital.module.css';
import { Link } from 'react-router-dom';
import formatSum from '../../../../utils/formatSum';
import scrollToTop from '../../../../utils/scrollToTop';
import _capital from '../../../../../_capital';
import { useDispatch, useSelector } from 'react-redux';
import {
    getAllPopsStatus,
    togglePopStatus
} from '../../../../../redux/isPopVisibleReducer';
import VeryTopPopWindow from '../veryTopPopWindow';

const Capital = () => {
    const dispatch = useDispatch();
    const isDetailed = useSelector(getAllPopsStatus()).veryTopDetailed2;
    const handleClick = (e) => {
        dispatch(togglePopStatus('veryTopDetailed2'));
        scrollToTop();
    };
    return (
        <>
            <Link
                to='items/new_book'
                title='Узнать про сбор подробней'
                className={classes.capital}
                onClick={handleClick}
            >
                {isDetailed && <VeryTopPopWindow />}
                Собрано
                <div className={classes.capitalSumBox}>
                    <span className='fw500'>{formatSum(_capital)}</span> ₽
                </div>
            </Link>
        </>
    );
};

export default Capital;
