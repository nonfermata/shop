import React from 'react';
import classes from './blockYouMoney.module.css';
import NoCommission from '../noCommission/noCommission';

const BlockYouMoney = () => {
    return (
        <>
            <div className={classes.info}>
                Оплата через систему{' '}
                <span className={classes.youmoney}>ЮMoney</span>.<br />
                Комиссия составит 0.5% при переводе из кошелька и 2% при
                переводе с карты.
                <NoCommission />
            </div>
            <div className={classes.block}></div>
        </>
    );
};

export default BlockYouMoney;
