import React from 'react';
import classes from './veryTopBlock.module.css';
import { Link } from 'react-router-dom';
import scrollToTop from '../../../../utils/scrollToTop';

const VeryTopNotice = () => {
    return (
        <div className={classes.topBlockWrap}>
            <Link
                className={classes.topNoticeWrap}
                to='items/new_book'
                title='Подробней про новую книгу'
                onClick={scrollToTop}
            >
                <div className={classes.leftPart}>
                    У нас вышла новая детская книга!
                </div>
                <div className={classes.rightPart}>
                    <span className={classes.details}>Подробней »</span>
                </div>
            </Link>
        </div>
    );
};

export default VeryTopNotice;
