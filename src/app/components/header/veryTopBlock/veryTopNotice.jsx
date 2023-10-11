import React from 'react';
import classes from './veryTopBlock.module.css';
import VeryTopPopWindow from './veryTopPopWindow';
import { useDispatch, useSelector } from 'react-redux';
import {
    getAllPopsStatus,
    togglePopStatus
} from '../../../../redux/isPopVisibleReducer';
import { Link } from 'react-router-dom';

const VeryTopNotice = () => {
    const dispatch = useDispatch();
    const isDetailed = useSelector(getAllPopsStatus()).veryTopDetailed;
    return (
        <div
            className={classes.topBlockWrap}
            onClick={() => {
                dispatch(togglePopStatus('veryTopDetailed'));
            }}
        >
            {isDetailed && <VeryTopPopWindow />}
            <Link
                className={classes.topNoticeWrap}
                to='items/new_book'
                title='Узнать про сбор подробней'
            >
                <div className={classes.leftPart}>
                    Идёт сбор на издание новой детской книги!
                </div>
                <div className={classes.rightPart}>
                    <span className='noHyph'>
                        Цель&nbsp;&nbsp;–&nbsp;&nbsp;
                        <span className='fw600'>350 000 ₽</span>
                    </span>
                    <span className={classes.details}>Подробней »</span>
                </div>
            </Link>
        </div>
    );
};

export default VeryTopNotice;
