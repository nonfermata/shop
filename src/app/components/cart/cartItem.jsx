import React, { useState } from 'react';
import classes from './cart.module.css';
import AmountManager from '../common/cartManagerForm/amountManager/amountManager';
import { useDispatch, useSelector } from 'react-redux';
import {
    getAmountById,
    getSumById,
    modifyItem
} from '../../../redux/cartReducer';
import ModifyButton from '../common/cartManagerForm/modifyButton/modifyButton';
import formatSum from '../../utils/formatSum';
import DonationModifyForm from '../common/cartManagerForm/donationModifyForm/donationModifyForm';
import UndoDonate from '../common/cartManagerForm/undoDonate/undoDonate';
import { NavLink, useNavigate } from 'react-router-dom';
import scrollToTop from '../../utils/scrollToTop';

const CartItem = ({
    id,
    image,
    name,
    subtitle,
    year,
    price,
    isDigital = true
}) => {
    const doublePrefix = name === 'Ретроспектива' ? 'двойной ' : '';
    const amount = useSelector(getAmountById(id));
    const sum = useSelector(getSumById(id));
    const dispatch = useDispatch();
    const modifyCart = (method) => {
        dispatch(modifyItem(id, method, price));
    };
    const navigate = useNavigate();
    const addedWrapStyle = id === 'gratis' ? classes.itemWrapGratis : '';
    const subtractTitle = amount === 1 ? 'Убрать из корзины' : 'Убрать 1 шт';
    const handleImageClick = () => {
        if (id !== 'gratis') {
            scrollToTop();
            navigate(`/items/${id}`);
        }
    };
    return (
        <div className={classes.itemWrap + ' ' + addedWrapStyle}>
            <img
                src={image}
                alt={name}
                className={id === 'gratis' ? classes.gratisImage : null}
                onClick={handleImageClick}
            />
            <div className={classes.itemInfoWrap}>
                <div>
                    <p className='itemName'>{name}</p>
                    <p className='itemYear'>{year}</p>
                    <p className={classes.subtitle}>
                        {doublePrefix + subtitle}
                    </p>
                    <div className={classes.sumInfo}>
                        {amount > 1 && id !== 'gratis' && (
                            <div className={classes.fewOnes}>
                                {id !== 'gratis' && <>{price} ₽ x </>}
                                {amount} шт{' '}
                                <span className={classes.separator}>
                                    &nbsp;&nbsp;|&nbsp;&nbsp;
                                </span>
                            </div>
                        )}
                        {id === 'gratis' && <>на общую сумму&nbsp;&nbsp;</>}
                        <span className='fw600'>{formatSum(sum)} ₽</span>
                    </div>
                </div>
                <div className={classes.itemManagerWrap}>
                    {id === 'gratis' ? (
                        <>
                            <DonationModifyForm
                                initialButtonText='Добавить ещё'
                                isCart={true}
                            />
                            <UndoDonate />
                        </>
                    ) : !isDigital ? (
                        <AmountManager
                            onClick={modifyCart}
                            amount={amount}
                            buttonsTitles={[subtractTitle, 'Добавить 1 шт']}
                        />
                    ) : (
                        <ModifyButton
                            onClick={() => {
                                modifyCart('subtract');
                            }}
                            title='Убрать из корзины'
                        >
                            -
                        </ModifyButton>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CartItem;
