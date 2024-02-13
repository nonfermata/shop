import React from 'react';
import classes from './youmoney.module.css';

const Youmoney = ({ sum }) => {
    return (
        <iframe
            title='youmoney'
            className={'yoomoney_frame ' + classes.frame}
            src={
                'https://yoomoney.ru/quickpay/shop-widget?writer=seller&targets=%D0%9F%D0%BE%D0%BC%D0%BE%D1%89%D1%8C%20%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B5%20%22%D0%91%D0%B5%D0%BB%D0%B0%D1%8F%20%D0%93%D0%B2%D0%B0%D1%80%D0%B4%D0%B8%D1%8F%22&default-sum=' +
                sum +
                '&button-text=11&successURL=&quickpay=shop&account=41001285065416&'
            }
            width='100%'
            height='220'
            frameBorder='0'
            scrolling='no'
        ></iframe>
    );
};

export default Youmoney;
