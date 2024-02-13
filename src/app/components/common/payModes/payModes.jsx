import React from 'react';
import classes from './payModes.module.css';

const PayModes = () => {
    return (
        <>
            <div className={classes.payModesWrap}>
                <p>
                    <span className='fw500'>Сбер:</span> 5469 3800 5674 8576
                </p>
                <p>
                    <span className='fw500'>Tinkoff:</span> 5536 9137 5679 3317
                </p>
                <p>
                    <span className='fw500'>PayPal:</span> paypal@bgvmusic.ru
                </p>
                <p>
                    <span className='fw500'>ЮMoney:</span> 41001285065416
                </p>
            </div>
            <p className={classes.thankU}>Сердечно благодарим!</p>
        </>
    );
};

export default PayModes;
