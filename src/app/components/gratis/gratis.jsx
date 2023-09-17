import React, { useState } from 'react';
import classes from './gratis.module.css';
import PriceField from '../common/priceField';
import { useSelector, useDispatch } from 'react-redux';
import {
    getAmountById,
    modifyItem,
    getSumById
} from '../../../redux/cartReducer';
import { gratis } from '../../data/data';
import undo from '../../assets/svg/undo';
import getDeclination from '../../utils/getDeclination';

const Gratis = () => {
    const { id, name, price, image } = gratis;
    const [error, setError] = useState('');
    const amount = useSelector(getAmountById(id)) || 0;
    const totalSum = useSelector(getSumById(id));
    const dispatch = useDispatch();
    const [userPrice, setUserPrice] = useState(price);
    const [buttonStyle, setButtonStyle] = useState('');
    const [buttonText, setButtonText] = useState('Добавить в корзину');
    const modifyCart = (method) => {
        if (!(method === 'subtract' && amount === 0) && !error) {
            if (method === 'add') {
                setButtonStyle(classes.successButton);
                setButtonText('Спасибо! Добавлено');
                setTimeout(() => {
                    setButtonStyle('');
                    setButtonText('Добавить ещё');
                }, 1200);
            }
            if (method === 'subtract' && amount === 1) {
                setButtonText('Добавить в корзину');
            }
            dispatch(modifyItem(id, method, userPrice));
        }
    };
    const validate = (value) => {
        if (isNaN(value) || value <= 0) {
            setError('Некорректный ввод!');
            setUserPrice(value);
            setButtonStyle(classes.inactiveButton);
        } else {
            setError('');
            setUserPrice(+value);
            setButtonStyle('');
        }
    };
    const handleChange = ({ target }) => {
        validate(target.value);
    };
    return (
        <div className={classes.gratisWrap}>
            <div className={classes.inputGroupWrap}>
                <img src={image} alt={name}/>
                <p className='itemName'>{name}</p>
                <div className={classes.priceInputWrap}>
                    <PriceField
                        onChange={handleChange}
                        value={userPrice}
                        disabled={false}
                    />
                    <div className={classes.inputError}>{error}</div>
                </div>
                <p>₽</p>
            </div>
            <div
                className={classes.addButton + ' ' + buttonStyle}
                onClick={() => {
                    modifyCart('add');
                }}
            >
                {buttonText}
            </div>
            <div className={classes.donationsInfoWrap}>
                {amount !== 0 && (
                    <>
                        <div className={classes.donationsInfo}>
                            Взносов без награды – на{' '}
                            <span className={classes.donationsSum}>
                                {totalSum}
                            </span>{' '}
                            {getDeclination(totalSum, 'rubles')}
                            <div className={classes.donationsThanks}>
                                С П А С И Б О !
                            </div>
                        </div>
                        <div
                            onClick={() => {
                                modifyCart('subtract');
                            }}
                            title='Отменить последний взнос'
                            className={classes.undo}
                        >
                            {undo}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Gratis;
