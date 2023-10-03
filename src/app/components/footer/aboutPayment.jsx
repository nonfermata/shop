import React from 'react';
import NoCommission from '../payment/noCommission/noCommission';
import classes from './footer.module.css'

const AboutPayment = () => {
    return (
        <div className={classes.aboutPaymentWrap}>
            Оплата через систему{' '}
            <span className='youmoneyWord'>ЮMoney</span>.<br />
            Комиссия составит 0.5% при переводе из кошелька и 2% при переводе с
            карты.
            <NoCommission />
        </div>
    );
};

export default AboutPayment;
