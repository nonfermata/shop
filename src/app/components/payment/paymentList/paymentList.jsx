import React from 'react';
import { getAllCart, getAllTotalSum } from '../../../utils/cartUtil';
import { useSelector } from 'react-redux';
import { getCart } from '../../../../redux/cartReducer';
import classes from './paymentList.module.css';
import getUpperFirst from '../../../utils/getUpperFirst';
import formatSum from '../../../utils/formatSum';

const PaymentList = () => {
    const cart = getAllCart(useSelector(getCart()));
    const totalSum = getAllTotalSum(cart);
    const getAmount = (donations) => {
        return donations.reduce((acc, item) => acc + item, 0);
    };
    return (
        <>
            <div className={classes.listTitle}>
                Вы оплачиваете следующие позиции:
            </div>
            <div className={classes.listWrap}>
                {cart.map(({ name, id, donations, subtitle, year }) => (
                    <div className={classes.listItem} key={id}>
                        <span className='fw600'>{name}. </span>
                        {id !== 'gratis' && (
                            <>
                                {year} год. {getUpperFirst(subtitle)}.{' '}
                                <span className='fw600'>
                                    {donations.length}
                                </span>{' '}
                                шт,{' '}
                            </>
                        )}
                        <span className='noHyph'>
                            {id !== 'gratis' ? 'на ' : 'На '}
                            общую сумму{' '}
                            <span className='fw600'>
                                {getAmount(donations)} ₽
                            </span>
                        </span>
                    </div>
                ))}
            </div>
            <div className={classes.listTotalSum}>
                Всего: <span className='fw600'>{formatSum(totalSum)} ₽</span>
            </div>
        </>
    );
};

export default PaymentList;
