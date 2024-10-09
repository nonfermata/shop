import React from 'react';
import classes from './veryTopBlock.module.css';
import { Link } from 'react-router-dom';
import scrollToTop from '../../../../utils/scrollToTop';
import explosion from '../../../../assets/images/explosion.png';

const VeryTopInfo = () => {
    return (
        <div className={classes.topBlockWrap}>
            <Link
                className={classes.topInfoWrap}
                to='items/rim'
                title='Подробней про новую книгу'
                onClick={scrollToTop}
            >
                <div className={classes.leftPart}>
                    <img
                        src={explosion}
                        alt='Attention'
                        className={classes.topExplosionImg}
                    />
                    Идёт сбор на издание новой книги!
                </div>
                <div className={classes.rightPart}>
                    Цель – 400 000 ₽.
                    <span className={classes.details}>Подробней »</span>
                    <img
                        src={explosion}
                        alt='Attention'
                        className={classes.topExplosionImg}
                    />
                </div>
            </Link>
        </div>
    );
};

export default VeryTopInfo;
