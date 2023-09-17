import React, { useState } from 'react';
import classes from './cart.module.css';
import AmountManager from '../common/amountManager';
import { useDispatch, useSelector } from 'react-redux';
import {
    getAmountById,
    getSumById,
    modifyItem
} from '../../../redux/cartReducer';
import ManagerButton from '../common/managerButton';
import PriceField from '../common/priceField';

const CartItem = ({ id, image, name, subtitle, year, price }) => {
    const isElItem =
        id.includes('mp3') ||
        id.includes('flac') ||
        id.includes('wav') ||
        id.includes('ebub');
    const [userPrice, setUserPrice] = useState(price);
    const amount = useSelector(getAmountById(id));
    const sum = useSelector(getSumById(id));
    const dispatch = useDispatch();
    const modifyCart = (method) => {
        dispatch(modifyItem(id, method, userPrice));
    };
    const validate = (value) => {
        if (!isNaN(value)) {
            setUserPrice(+value);
        }
    };
    const handleChange = ({ target }) => {
        validate(target.value);
    };
    const addedWrapStyle = id === 'gratis' ? classes.itemWrapGratis : '';

    return (
        <div className={classes.itemWrap + ' ' + addedWrapStyle}>
            <img src={image} alt={name} />
            <div className={classes.itemInfoWrap}>
                <div className={classes.itemInfo}>
                    <p className='itemName'>{name}</p>
                    <p className='itemYear'>{year}</p>
                    <p className={classes.subtitle}>{subtitle}</p>
                    <div className={classes.sumInfo}>
                        {amount > 1 && (
                            <>
                                {id !== 'gratis' && <>{price} ₽ x </>}
                                {amount} шт&nbsp;&nbsp;|&nbsp;&nbsp;
                            </>
                        )}
                        <span className='fw600'>{sum} ₽</span>
                    </div>
                </div>
                <div className={classes.itemManagerWrap}>
                    {id === 'gratis' && (
                        <div>
                            <p className={classes.gratisAddPhrase}>Добавить</p>
                            <div className={classes.donationInputWrap}>
                                <PriceField
                                    onChange={handleChange}
                                    value={userPrice}
                                />
                                <p>₽</p>
                            </div>
                        </div>
                    )}
                    {!isElItem ? (
                        <AmountManager onClick={modifyCart} amount={amount} />
                    ) : (
                        <ManagerButton
                            onClick={() => {
                                modifyCart('subtract');
                            }}
                            title='Убрать'
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
