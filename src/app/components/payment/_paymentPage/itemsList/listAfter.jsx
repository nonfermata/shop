import React from 'react';
import { getItemsSum } from '../../../../utils/cartUtil';
import classes from './itemsList.module.css';
import ItemsListHTML from './itemsListHTML';
import formatSum from '../../../../utils/formatSum';

const ListAfter = () => {
    const cart = JSON.parse(localStorage.getItem('totalCart'));
    const itemsSum = getItemsSum(cart);
    const totalSum = Number(localStorage.getItem('totalSum'));
    return (
        <>
            <div className={classes.listTitle}>У вас в корзине:</div>
            <ItemsListHTML cart={cart} />
            <div className={classes.listItemsSum}>
                Всего: <span className='fw600'>{formatSum(itemsSum)} ₽</span>
            </div>
            {totalSum !== itemsSum && (
                <div className={classes.totalSum}>
                    С доставкой:{' '}
                    <span className='fw600'>{formatSum(totalSum)} ₽</span>
                </div>
            )}
            <div className={classes.nowJustPay}>
                Спасибо! Ваши данные уже у нас.
                <br />
                {/*Мы свяжемся с вами в ближайшее время.*/}
                Осталось произвести оплату.
            </div>
        </>
    );
};

export default ListAfter;
