import React, { useState } from 'react';
import classes from './cart.module.css';
import AmountManager from '../common/amountManager/amountManager';
import { useDispatch, useSelector } from 'react-redux';
import {
    getAmountById,
    getSumById,
    modifyItem
} from '../../../redux/cartReducer';
import ManagerButton from '../common/managerButton/managerButton';
import formatSum from '../../utils/formatSum';
import DonationForm from '../common/donationForm/donationForm';
import UndoDonate from '../common/undoDonate/undoDonate';

const CartItem = ({ id, image, name, subtitle, year, price }) => {
    const isElItem =
        id.includes('mp3') ||
        id.includes('flac') ||
        id.includes('wav') ||
        id.includes('epub');
    const amount = useSelector(getAmountById(id));
    const sum = useSelector(getSumById(id));
    const dispatch = useDispatch();
    const modifyCart = (method) => {
        dispatch(modifyItem(id, method, price));
    };
    const addedWrapStyle = id === 'gratis' ? classes.itemWrapGratis : '';
    const subtractTitle = amount === 1 ? 'Убрать из корзины' : 'Убрать 1 шт';

    return (
        <div className={classes.itemWrap + ' ' + addedWrapStyle}>
            <img src={image} alt={name} />
            <div className={classes.itemInfoWrap}>
                <div>
                    <p className='itemName'>{name}</p>
                    <p className='itemYear'>{year}</p>
                    <p className={classes.subtitle}>{subtitle}</p>
                    <div className={classes.sumInfo}>
                        {amount > 1 && id !== 'gratis' && (
                            <>
                                {id !== 'gratis' && <>{price} ₽ x </>}
                                {amount} шт&nbsp;&nbsp;|&nbsp;&nbsp;
                            </>
                        )}
                        {id === 'gratis' && <>на общую сумму&nbsp;&nbsp;</>}
                        <span className='fw600'>{formatSum(sum)} ₽</span>
                    </div>
                </div>
                <div className={classes.itemManagerWrap}>
                    {id === 'gratis' ? (
                        <>
                            <DonationForm
                                initialButtonText='Добавить ещё'
                                isCart={true}
                            />
                            <UndoDonate />
                        </>
                    ) : !isElItem ? (
                        <AmountManager
                            onClick={modifyCart}
                            amount={amount}
                            buttonsTitles={[subtractTitle, 'Добавить 1 шт']}
                        />
                    ) : (
                        <ManagerButton
                            onClick={() => {
                                modifyCart('subtract');
                            }}
                            title='Убрать из корзины'
                        >
                            -
                        </ManagerButton>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CartItem;
