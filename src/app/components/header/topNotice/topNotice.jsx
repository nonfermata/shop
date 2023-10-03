import React from 'react';
import classes from './topNotice.module.css';
import Capital from '../capital/capital';
import scrollToTop from '../../../utils/scrollToTop';
import { NavLink } from 'react-router-dom';

const TopNotice = () => {
    return (
        <div className={classes.topNoticeWrap}>
            <NavLink
                to='items/new_book'
                title='Узнать о книге подробней'
                onClick={scrollToTop}
            >
                Идёт сбор на издание новой детской книги!&nbsp; &nbsp;
                <span className='noHyph'>
                    Цель&nbsp;&nbsp;–&nbsp;&nbsp;
                    <span className='fw600'>350 000 ₽</span>
                </span>
            </NavLink>
            <Capital />
        </div>
    );
};

export default TopNotice;
