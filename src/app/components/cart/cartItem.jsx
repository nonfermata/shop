import React from 'react';
import classes from './cart.module.css';
import AmountManager from '../common/amountManager';
import { useDispatch, useSelector } from 'react-redux';
import {
    getAmountById,
    getSumById,
    modifyItem
} from '../../../redux/cartReducer';
import getDeclination from '../../utils/getDeclination';
import ManagerButton from '../common/managerButton';

const CartItem = ({ id, image, name, subtitle, year, price }) => {
    const isElItem =
        id.includes('mp3') ||
        id.includes('flac') ||
        id.includes('wav') ||
        id.includes('ebub');
    const amount = useSelector(getAmountById(id));
    const sum = useSelector(getSumById(id));
    const dispatch = useDispatch();
    const modifyCart = (method) => {
        dispatch(modifyItem(id, method, price));
    };

    return (
        <div className={classes.itemWrap}>
            <img src={image} alt={name} />
            <div>
                <p className='itemName'>{name}</p>
                <p className='itemYear'>{year}</p>
                <p className={classes.subtitle}>{subtitle}</p>
                <div className={classes.sumInfo}>
                    <div>
                        <span className='fw600'>{amount}</span> шт на общую
                        сумму <span className='fw600'>{sum}</span>{' '}
                        {getDeclination(sum, 'rubles')}
                    </div>
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
