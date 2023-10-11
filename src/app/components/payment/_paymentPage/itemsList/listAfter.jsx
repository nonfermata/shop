import React from 'react';
import { getItemsSum } from '../../../../utils/cartUtil';
import classes from './itemsList.module.css';
import ItemsListHTML from './itemsListHTML';
import formatSum from '../../../../utils/formatSum';

const ListAfter = () => {
    const cart = JSON.parse(localStorage.getItem('totalCart'));
    const itemsSum = getItemsSum(cart);
    const totalSum = Number(localStorage.getItem('totalSum'));
    const name = localStorage.getItem('name') || '';
    const email = localStorage.getItem('email') || '';
    const region = localStorage.getItem('region') || '';
    return (
        <div className={classes.finalStageWrap}>
            <div className={classes.thankYouDataOk}>
                Спасибо! Ваши данные уже у нас,
                <br />и в ближайшее время мы с вами свяжемся.
            </div>
            <div className={classes.personData}>
                Имя: <span className='fw600'>{name}</span>
            </div>
            <div className={classes.personData}>
                E-mail: <span className='fw600'>{email}</span>
            </div>
            {region && (
                <div className={classes.personData}>
                    Регион: <span className='fw600'>{region}</span>
                </div>
            )}
            <div className={classes.inCart}>Оплата за:</div>
            <ItemsListHTML cart={cart} />
            <p className={classes.listItemsSum}>
                Всего на сумму: <span className='fw600'>{formatSum(itemsSum)} ₽</span>
            </p>
            {totalSum !== itemsSum && (
                <p className={classes.totalSum}>
                    С доставкой:{' '}
                    <span className='fw600'>{formatSum(totalSum)} ₽</span>
                </p>
            )}
            <div className={classes.toPayWrap}>
                <p className={classes.nowJustPay}>
                    Вам осталось произвести оплату.
                </p>
                <p className={classes.payOnCardPlease}>
                    Если вы из России – оплата переводом{' '}
                    <span className='noHyph'>на карту Сбера:</span>
                </p>
                <p className={classes.payingCardNumber}>5469 3800 5674 8576</p>
                <p className={classes.payingCardOwner}>
                    / получатель Зоя Николаевна Я. /
                </p>
                <p className={classes.confirmPleaseByEmail}>
                    После оплаты пришлите, пожалуйста, чек на наш e-mail:{' '}
                    <a href='mailto:bgv@bgvmusic.ru'>bgv@bgvmusic.ru</a>
                </p>
                <p className={classes.otherPayingModesInWork}>
                    Над внедрением других способов оплаты мы пока работаем.
                </p>
            </div>
        </div>
    );
};

export default ListAfter;
