import React from 'react';
import classes from './youmoney.module.css';
import NoCommission from '../noCommission/noCommission';

const YoumoneyBlock = () => {
    return (
        <>
            <div className={classes.info}>
                Оплата через систему{' '}
                <span className='youmoneyWord'>ЮMoney</span>.<br />
                Комиссия составит 0.5% при переводе из кошелька и 2% при
                переводе с карты.
                <NoCommission />
            </div>
            <div className={classes.block}></div>
        </>
    );
};

export default YoumoneyBlock;
